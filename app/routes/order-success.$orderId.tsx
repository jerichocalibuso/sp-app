import { Order, Product, Role, Status } from '@prisma/client'
import { Link, LoaderFunction, redirect, useLoaderData } from 'remix'
import { authenticator } from '~/services/auth.server'
import {
  createPayment,
  retrievePaymentIntent,
  retrieveSource,
} from '~/services/paymongo.server'
import { db } from '~/utils/db.server'

/* This example requires Tailwind CSS v2.0+ */
const products = [
  {
    id: 1,
    name: 'Cold Brew Bottle',
    description:
      'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
    href: '#',
    quantity: 1,
    price: '$32.00',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
  {
    id: 1,
    name: 'Cold Brew Bottle',
    description:
      'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
    href: '#',
    quantity: 1,
    price: '$32.00',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
  {
    id: 1,
    name: 'Cold Brew Bottle',
    description:
      'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
    href: '#',
    quantity: 1,
    price: '$32.00',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
]

export const loader: LoaderFunction = async ({ params, request }) => {
  const { orderId } = params
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.CUSTOMER) {
    return redirect('/unauthorized')
  }

  const currentOrder = await db.order.findFirst({
    where: {
      id: orderId,
      userId: user?.id,
    },
  })

  if (!currentOrder) redirect('/cart')

  if (currentOrder?.sourceId && !currentOrder?.paidAt) {
    const res = await retrieveSource(currentOrder?.sourceId)
    if (!res.status) {
      return redirect('/cart')
    }

    if (res.status === 'pending') {
      return redirect(res.checkoutUrl)
    } else if (res.status === 'chargeable') {
      const paymentReference = await createPayment(
        currentOrder.sourceId,
        currentOrder?.amount
      )
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: Status.PACKAGING,
          paymentReference: paymentReference,
          paidAt: new Date(),
        },
      })
      return redirect(`/order-success/${orderId}`)
    }
  }

  if (currentOrder?.paymentIntentId && !currentOrder?.paidAt) {
    const res = await retrievePaymentIntent(currentOrder?.paymentIntentId)

    if (res.status === 'paid') {
      const updatedOrder = await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: Status.PACKAGING,
          paymentReference: res.paymentReference,
          paidAt: new Date(),
        },
      })
      console.log(`updatedOrder: ${JSON.stringify(updatedOrder, null, 2)}`)
      return redirect(`/order-success/${orderId}`)
    } else {
      return redirect('http://localhost:3000/checkout?paymentFailed=true')
    }
  }

  const products = await db.product.findMany({
    where: {
      id: {
        in: currentOrder?.productIds || [],
      },
    },
  })
  return { currentOrder, products }
}

export default function Example() {
  const { currentOrder, products } = useLoaderData()
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h1 className='text-sm font-semibold uppercase tracking-wide text-red-500'>
            Thank you!
          </h1>
          <p className='mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            It's on the way!
          </p>
          <p className='mt-2 text-base text-gray-500'>
            Your order has been placed and will be delivered to you soon.
          </p>

          <dl className='mt-12 text-sm font-medium'>
            <dt className='text-gray-900'>Order ID</dt>
            <dd className='mt-2 text-red-500'>{currentOrder?.id || ''}</dd>
          </dl>
        </div>

        <div className='mt-10 border-t border-gray-200'>
          <h2 className='sr-only'>Your order</h2>

          <h3 className='sr-only'>Items</h3>
          {products.map((product: Product) => {
            const quantity = currentOrder?.productIds.filter((id: string) => {
              return product.id?.toString() === id
            })?.length
            return (
              <div
                key={product.id}
                className='flex space-x-6 border-b border-gray-200 py-10'
              >
                <Link to={`/products/${product?.id}`}>
                  <img loading='lazy' src={product?.imageUrl || ''} />
                </Link>

                <div className='flex flex-auto flex-col'>
                  <div>
                    <h4 className='font-medium text-gray-900 hover:text-red-500'>
                      <Link to={`/products/${product?.id}`}>
                        {product.name}
                      </Link>
                    </h4>
                    <p className='mt-2 text-sm text-gray-600'>
                      {product.description}
                    </p>
                  </div>
                  <div className='mt-6 flex flex-1 items-end'>
                    <dl className='flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6'>
                      <div className='flex'>
                        <dt className='font-medium text-gray-900'>Quantity</dt>
                        <dd className='ml-2 text-gray-700'>{quantity}</dd>
                      </div>
                      <div className='flex pl-4 sm:pl-6'>
                        <dt className='font-medium text-gray-900'>Price</dt>
                        <dd className='ml-2 text-gray-700'>{product.price}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )
          })}

          <div className=''>
            <h3 className='sr-only'>Your information</h3>

            <h4 className='sr-only'>Addresses</h4>
            <dl className='grid grid-cols-2 gap-x-6 py-10 text-sm'>
              <div>
                <dt className='font-medium text-gray-900'>
                  Delivery information
                </dt>
                <dd className='mt-2 text-gray-700'>
                  <address className='not-italic'>
                    <span className='block'>Address</span>
                    <span className='block'>City, Cavite</span>
                    <span className='block'>Contact Person</span>
                    <span className='block'>09121231234</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className='font-medium text-gray-900'>Payment method</dt>
                <dd className='mt-2 text-gray-700'>
                  <div className='not-italic'>
                    <span className='block'>Credit / debit card</span>
                  </div>
                </dd>
              </div>
            </dl>

            <h3 className='sr-only'>Summary</h3>

            <dl className='space-y-6 border-t border-gray-200 pt-10 text-sm'>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Subtotal</dt>
                <dd className='text-gray-700'>₱50</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='flex font-medium text-gray-900'>
                  Discount
                  <span className='ml-2 rounded-full bg-red-500 py-0.5 px-2 text-xs text-white'>
                    Free Delivery
                  </span>
                </dt>
                <dd className='text-gray-700'>-₱50</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Delivery</dt>
                <dd className='text-gray-700'>$0</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Total</dt>
                <dd className='text-gray-900'>₱50</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
