import { ProductsPage } from '~/components/ProductsPage'
import { db } from '~/utils/db.server'
import { Category, Product } from './products'
import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, ActionFunction, redirect } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'
import { validationError } from 'remix-validated-form'
import { OrderItem, Role, Status } from '@prisma/client'
import { commitSession, getSession } from '~/services/guest.server'

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

  const formData = await request.formData()
  const productId = formData.get('productId') as string
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  })

  if (!product) {
    return null
  }

  if (user?.role === Role.CUSTOMER) {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user?.id,
        status: 'IN_CART',
      },
      include: {
        orderItems: true,
      },
    })

    if (currentOrder) {
      const existingProduct = currentOrder.orderItems.find(
        (p) => p.productId === product.id
      )
      if (existingProduct) {
        await db.orderItem.update({
          where: {
            id: existingProduct.id,
          },
          data: {
            quantity: {
              increment: 1,
            },
          },
        })
      } else {
        await db.orderItem.create({
          data: {
            productId: product.id,
            quantity: 1,
            orderId: currentOrder.id,
          },
        })
      }
      const updatedOrder = await db.order.update({
        where: { id: currentOrder.id },
        data: {
          amount: { increment: product.price },
        },
        include: { orderItems: true },
      })

      return { order: updatedOrder }
    } else {
      const order = await db.order.create({
        data: {
          amount: product.price,
          status: Status.IN_CART,
          userId: user?.id,
        },
      })

      await db.orderItem.create({
        data: {
          orderId: order.id,
          productId: product.id,
          quantity: 1,
        },
      })

      const updatedOrder = await db.order.findFirst({
        where: { id: order.id },
        include: { orderItems: true },
      })

      return { order: updatedOrder }
    }
  } else {
    const session = await getSession(request)
    const orderItems = session.get('orderItems') || []
    const existingProduct = orderItems.find(
      (orderItem: OrderItem) => orderItem.productId === product.id
    )
    const existingProductIndex = orderItems.findIndex(
      (orderItem: OrderItem) => orderItem.productId === product.id
    )
    if (existingProduct) {
      orderItems[existingProductIndex] = {
        productId: product.id,
        quantity: existingProduct.quantity + 1,
      }
    } else {
      orderItems.push({
        productId: product.id,
        quantity: 1,
      })
    }
    session.set('orderItems', orderItems)
    return redirect('/beef', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  }
}

export default function BeefPage() {
  const category = Category.BEEF
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
