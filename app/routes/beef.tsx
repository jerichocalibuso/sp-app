import { ProductsPage } from '~/components/ProductsPage'
import { db } from '~/utils/db.server'
import { Category, Product } from './products'
import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, ActionFunction, redirect } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'
import { validationError } from 'remix-validated-form'
import { Role, Status } from '@prisma/client'

export const loader: LoaderFunction = async ({ params }) => {
  const products = await db.product.findMany({
    where: {
      category: 'BEEF',
    },
  })
  return products
}

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)
  if (user?.role === Role.RIDER || user?.role === Role.ADMIN) {
    return redirect('/unauthorized')
  }

  if (!user?.role) {
    return redirect('/signin')
  }

  const formData = await request.formData()
  const productId = formData.get('productId') as string
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  })

  if (!product) {
    return validationError({
      fieldErrors: {
        name: 'Product does not exist',
      },
    })
  }

  if (user?.role === Role.CUSTOMER) {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user?.id,
        status: 'IN_CART',
      },
    })

    if (currentOrder) {
      const res = await db.order.update({
        where: {
          id: currentOrder?.id,
        },
        data: {
          amount: currentOrder.amount + product.price,
          productIds: {
            push: [productId],
          },
        },
      })
      return res
    } else {
      return await db.order.create({
        data: {
          amount: product.price,
          productIds: [product.id],
          status: Status.IN_CART,
          userId: user?.id,
        },
      })
    }
  }
}

export default function BeefPage() {
  const category = Category.BEEF
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
