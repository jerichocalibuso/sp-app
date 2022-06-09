import { Role, Status } from '@prisma/client'
import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
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
  }
}

export default function AllProductsPage() {
  const category = Category.ALL
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
