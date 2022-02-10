import { Outlet } from 'remix'

export enum Brand {
  CAMILLE = 'Camille',
  BOUNTY_FRESH = 'Bounty Fresh',
}

export enum Category {
  CHICKEN = 'Chicken',
  PORK = 'Pork',
  BEEF = 'Beef',
}

export type Product = {
  id: number
  name: string
  brand: Brand
  category: Category
  imageSrc: string
  imageAlt: string
  price: number
  weight: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    imageSrc: '/images/BF-chicken-breaded-skin-350g.jpeg',
    imageAlt: 'BF-chicken-breaded-skin-350g',
    name: 'Chicken Breaded Skin',
    weight: '350g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 2,
    imageSrc: '/images/BF-chicken-breast-fillets-860g.jpeg',
    imageAlt: 'BF-chicken-breast-fillets-860g',
    name: 'Chicken Breasts Fillets',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 290,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 3,
    imageSrc: '/images/BF-chicken-breasts-860g.jpeg',
    imageAlt: 'BF-chicken-breasts-860g',
    name: 'Chicken Breasts',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 4,
    imageSrc: '/images/BF-chicken-leg-quarters-860g.jpeg',
    imageAlt: 'BF-chicken-leg-quarters-860g',
    name: 'Chicken Leg Quarters',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 5,
    imageSrc: '/images/BF-chicken-nuggets-200g.jpeg',
    imageAlt: 'BF-chicken-nuggets-200g',
    name: 'Chicken Nuggets',
    weight: '200g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 6,
    imageSrc: '/images/BF-chicken-popcorn-200g.jpeg',
    imageAlt: 'BF-chicken-popcorn-200g',
    name: 'Chicken Popcorn',
    weight: '200g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 7,
    imageSrc: '/images/BF-chicken-sticks-200g.jpeg',
    imageAlt: 'BF-chicken-sticks-200g',
    name: 'Chicken Sticks',
    weight: '200g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 8,
    imageSrc: '/images/BF-chicken-thighs-860g.jpeg',
    imageAlt: 'BF-chicken-thighs-860g',
    name: 'Chicken Thighs',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 9,
    imageSrc: '/images/BF-chicken-wings-860g.jpeg',
    imageAlt: 'BF-chicken-wings-860g',
    name: 'Chicken Wings',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 10,
    imageSrc: '/images/BF-drumstick-860g.jpeg',
    imageAlt: 'BF-drumstick-860g',
    name: 'Chicken Drumsticks',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },

  {
    id: 11,
    imageSrc: '/images/BF-everyday-chicken-piece.jpeg',
    imageAlt: 'BF-everyday-chicken-piece',
    name: 'Everyday Chicken',
    weight: '',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 160,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 12,
    imageSrc: '/images/BF-family-feast-chicken.jpeg',
    imageAlt: 'BF-family-feast-chicken',
    name: 'Family Feast Chicken',
    weight: '',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 280,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 13,
    imageSrc: '/images/BF-free-range-chicken.jpeg',
    imageAlt: 'BF-free-range-chicken',
    name: 'Free Range Chicken',
    weight: '',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 250,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 14,
    imageSrc: '/images/BF-marinated-chicken-cut-ups-pepper-550g.jpeg',
    imageAlt: 'BF-marinated-chicken-cut-ups-pepper-550g',
    name: 'Marinated Chicken Cut Ups (Pepper)',
    weight: '550g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 115,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 15,
    imageSrc: '/images/BF-marinated-chicken-cut-ups-spicy-550g.jpeg',
    imageAlt: 'BF-marinated-chicken-cut-ups-spicy-550g',
    name: 'Marinated Chicken Cut Ups (Spicy)',
    weight: '550g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 115,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 16,
    imageSrc: '/images/BF-marinated-chicken-cut-ups-sweet-550g.jpeg',
    imageAlt: 'BF-marinated-chicken-cut-ups-sweet-550g',
    name: 'Marinated Chicken Cut Ups (Spicy)',
    weight: '550g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 115,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 17,
    imageSrc: '/images/BF-marinated-chicken-neck-500g.jpeg',
    imageAlt: 'BF-marinated-chicken-neck-500g',
    name: 'Marinated Chicken Neck',
    weight: '500g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 80,

    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 18,
    imageSrc: '/images/BF-premium-chicken.jpeg',
    imageAlt: 'BF-premium-chicken',
    name: 'Premium Chicken',
    weight: '',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 250,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 19,
    imageSrc: '/images/BF-saucy-torikaraage-sweet-and-sour-450g.jpeg',
    imageAlt: 'BF-saucy-torikaraage-sweet-and-sour-450g',
    name: 'Saucy Torikaraage (Sweet and Sour)',
    weight: '450g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 20,
    imageSrc: '/images/BF-saucy-torikaraage-teriyaki-450g.jpeg',
    imageAlt: 'BF-saucy-torikaraage-teriyaki-450g',
    name: 'Saucy Torikaraage (Sweet and Sour)',
    weight: '450g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },

  {
    id: 21,
    imageSrc: '/images/BF-chicken-thigh-fillets-860g.jpeg',
    imageAlt: 'BF-chicken-thigh-fillets-860g',
    name: 'Chicken Thigh Fillets',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 290,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 22,
    imageSrc: '/images/BF-top-toriburger-cheese-and-chives-450g.jpeg',
    imageAlt: 'BF-top-toriburger-cheese-and-chives-450g',
    name: 'Top Toriburger (Cheese and Chives)',
    weight: '450g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 23,
    imageSrc: '/images/BF-top-toriburger-classic-mayo-450g.jpeg',
    imageAlt: 'BF-top-toriburger-classic-mayo-450g',
    name: 'Top Toriburger (Classic Mayo)',
    weight: '450g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 24,
    imageSrc: '/images/BF-top-torikatsu-cheese-and-chives-450g.jpeg',
    imageAlt: 'BF-top-torikatsu-cheese-and-chives-450g',
    name: 'Top Torikatsu (Cheese and Chives)',
    weight: '450g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 25,
    imageSrc: '/images/BF-top-torikatsu-classic-mayo-450g.jpeg',
    imageAlt: 'BF-top-torikatsu-classic-mayo-450g',
    name: 'Top Torikatsu (Classic Mayo)',
    weight: '450g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 26,
    imageSrc: '/images/BF-young-and-tender-chicken.jpeg',
    imageAlt: 'BF-young-and-tender-chicken',
    name: 'Young and Tender Chicken',
    weight: '',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 190,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 27,
    imageSrc: '/images/BF-chicken-breaded-skin-350g.jpeg',
    imageAlt: 'BF-chicken-breaded-skin-350g',
    name: 'Chicken Breaded Skin',
    weight: '350g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 41,
    imageSrc: '/images/Camille-beef-cubes-500g.jpeg',
    imageAlt: 'Camille-beef-cubes-500g',
    name: 'Beef Cubes',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 42,
    imageSrc: '/images/Camille-beef-new-york-steak-500g.jpeg',
    imageAlt: 'Camille-beef-new-york-steak-500g',
    name: 'Beef New York Steak',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 43,
    imageSrc: '/images/Camille-beef-sakiyuki-500g.jpeg',
    imageAlt: 'Camille-beef-sakiyuki-500g',
    name: 'Beef Sakiyuki',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 44,
    imageSrc: '/images/Camille-beef-shanks-500g.jpeg',
    imageAlt: 'Camille-beef-shanks-500g',
    name: 'Beef Shanks',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 45,
    imageSrc: '/images/Camille-beef-strongranoff-500g.jpeg',
    imageAlt: 'Camille-beef-strongranoff-500g',
    name: 'Beef Strongranoff',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 46,
    imageSrc: '/images/Camille-ground-beef-500g.jpeg',
    imageAlt: 'Camille-ground-beef-500g',
    name: 'Ground Beef',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 47,
    imageSrc: '/images/Camille-ground-pork.jpeg',
    imageAlt: 'Camille-ground-pork',
    name: 'Ground Pork',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 48,
    imageSrc: '/images/Camille-pata-slice-500g.jpeg',
    imageAlt: 'Camille-pata-slice-500g',
    name: 'Pata Slice',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 49,
    imageSrc: '/images/Camille-pork-adobo-cut-500g.jpeg',
    imageAlt: 'Camille-pork-adobo-cut-500g',
    name: 'Pork Adobo Cut',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 50,
    imageSrc: '/images/Camille-pork-bacon-cut-500g.jpeg',
    imageAlt: 'Camille-pork-bacon-cut-500g',
    name: 'Pork Bacon Cut',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 51,
    imageSrc: '/images/Camille-pork-belly-slice-500g.jpeg',
    imageAlt: 'Camille-pork-belly-slice-500g',
    name: 'Pork Belly Slice',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 52,
    imageSrc: '/images/Camille-pork-sinigang-cut-500g.jpeg',
    imageAlt: 'Camille-pork-sinigang-cut-500g',
    name: 'Pork Sinigang Cut',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 53,
    imageSrc: '/images/Camille-porkchop-500g.jpeg',
    imageAlt: 'Camille-porkchop-500g',
    name: 'Pork Chop',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
]

const returnTitle = ({
  onlyCategory,
}: {
  onlyCategory: Category | null
}): string => {
  if (onlyCategory === null) {
    return 'All Products'
  } else if (onlyCategory === Category.CHICKEN) {
    return 'Chicken Products'
  } else if (onlyCategory === Category.PORK) {
    return 'Pork Products'
  } else if (onlyCategory === Category.BEEF) {
    return 'Beef Products'
  } else {
    return 'All Products'
  }
}

export default function ProductsPage({
  onlyCategory,
}: {
  onlyCategory: Category | null
}) {
  return (
    <main className='bg-white'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          {returnTitle({ onlyCategory })}
        </h1>

        <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {products
            .sort((a, b) => b.id - a.id)
            .map((product) => {
              if (
                onlyCategory === Category.CHICKEN &&
                product.category !== Category.CHICKEN
              )
                return
              else if (
                onlyCategory === Category.BEEF &&
                product.category !== Category.BEEF
              )
                return
              else if (
                onlyCategory === Category.PORK &&
                product.category !== Category.PORK
              )
                return
              return (
                <div key={product.id}>
                  <div className='relative'>
                    <div className='relative h-72 w-full overflow-hidden rounded-lg'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
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
                  <div className='mt-6'>
                    <a
                      href='#'
                      className='relative flex items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-400'
                    >
                      Add to cart<span className='sr-only'></span>
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}
