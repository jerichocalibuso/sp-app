import { Role, Status } from '@prisma/client'
import { ActionFunction, LoaderFunction, redirect, useLoaderData } from 'remix'
import { validationError } from 'remix-validated-form'
import { ProductsPage } from '~/components/ProductsPage'
import { authenticator } from '~/services/auth.server'
import { db } from '~/utils/db.server'

export enum Brand {
  CAMILLE = 'Camille',
  BOUNTY_FRESH = 'Bounty Fresh',
}

export enum Category {
  CHICKEN = 'Chicken',
  PORK = 'Pork',
  BEEF = 'Beef',
  ALL = 'All',
}

export type Product = {
  id: number
  name: string
  brand: Brand
  category: Category
  imageUrl: string
  imageAlt: string
  price: number
  weight: string
  description: string
}

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const chickenProducts = await db.product.findMany({
      where: { category: 'CHICKEN' },
    })
    const porkProducts = await db.product.findMany({
      where: { category: 'PORK' },
    })
    const beefProducts = await db.product.findMany({
      where: { category: 'BEEF' },
    })
    const productsCount = await db.product.count()
    let currentCategory = Category.CHICKEN
    const sortedProducts = []
    for (let i = 0; i < productsCount; i++) {
      if (currentCategory === Category.CHICKEN) {
        const chickenProduct = chickenProducts.pop()
        if (chickenProduct?.id) {
          sortedProducts.push(chickenProduct)
        }
        currentCategory = Category.PORK
      } else if (currentCategory === Category.PORK) {
        const porkProduct = porkProducts.pop()
        if (porkProduct?.id) {
          sortedProducts.push(porkProduct)
        }
        currentCategory = Category.BEEF
      } else if (currentCategory === Category.BEEF) {
        const beefProduct = beefProducts.pop()
        if (beefProduct?.id) {
          sortedProducts.push(beefProduct)
        }
        currentCategory = Category.CHICKEN
      }
    }
    return sortedProducts
  } catch (error) {
    console.error(error)
  }
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

export default function AllProductsPage() {
  const category = Category.ALL
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
