import { ActionFunction, Form } from 'remix'
import { Category, Product } from '~/routes/products'
import { authenticator } from '~/services/auth.server'

interface Props {
  products: Product[]
  category: string
}

const returnTitle = (category: string): string => {
  if (category === Category.CHICKEN) {
    return 'Chicken Products'
  } else if (category === Category.PORK) {
    return 'Pork Products'
  } else if (category === Category.BEEF) {
    return 'Beef Products'
  } else {
    return 'All Products'
  }
}

export function ProductsPage({ products, category }: Props) {
  return (
    <main className='bg-white'>
      <div className='mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          {category && returnTitle(category)}
        </h1>

        <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div className='relative'>
                  <div className='relative h-72 w-full overflow-hidden rounded-lg'>
                    <img
                      loading='lazy'
                      src={product.imageUrl}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <div className='relative mt-4 h-16'>
                    <div className='flex justify-between '>
                      <h3 className='text-md font-medium text-gray-900 hover:text-red-500'>
                        <a href={`/products/${product.id}`}>{product.name}</a>
                      </h3>
                      <div className='ml-2'>
                        <p className='relative text-lg font-semibold text-red-500'>
                          ₱{product.price}
                        </p>
                      </div>
                    </div>
                    <p className='relative text-sm font-semibold text-gray-500'>
                      {product.brand}
                    </p>
                  </div>
                  <a href={`/products/${product.id}`}>
                    <div className='absolute inset-x-0 top-0  flex h-72 cursor-pointer items-end justify-end overflow-hidden rounded-lg p-4'>
                      <div
                        aria-hidden='true'
                        className='absolute inset-x-0 bottom-0 h-36  bg-gradient-to-t from-neutral-500 to-white opacity-10  hover:opacity-5'
                      />
                    </div>
                  </a>
                </div>
                {/* ADD KILOS INPUT */}
                <Form method='post'>
                  <input type='hidden' name='productId' value={product.id} />

                  <div className='w mt-6'>
                    <button
                      type='submit'
                      className='block w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-400'
                    >
                      Add to cart<span className='sr-only'></span>
                    </button>
                  </div>
                </Form>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
