import { Outlet } from "remix";

export enum Brand {
  CAMILLE = "Camille",
  BOUNTY_FRESH = "Bounty Fresh",
}

export enum Category {
  CHICKEN = "Chicken",
  PORK = "Pork",
  BEEF = "Beef",
}

export type Product = {
  id: number;
  name: string;
  brand: Brand;
  category: Category;
  imageSrc: string;
  imageAlt: string;
  price: number;
  weight: string;
};

const products: Product[] = [
  {
    id: 1,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 2,
    imageSrc: "/images/BF-chicken-breast-fillets-860g.jpeg",
    imageAlt: "BF-chicken-breast-fillets-860g",
    name: "Chicken Breasts Fillets",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 290,
  },
  {
    id: 3,
    imageSrc: "/images/BF-chicken-breasts-860g.jpeg",
    imageAlt: "BF-chicken-breasts-860g",
    name: "Chicken Breasts",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
  },
  {
    id: 4,
    imageSrc: "/images/BF-chicken-leg-quarters-860g.jpeg",
    imageAlt: "BF-chicken-leg-quarters-860g",
    name: "Chicken Leg Quarters",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
  },
  {
    id: 5,
    imageSrc: "/images/BF-chicken-nuggets-200g.jpeg",
    imageAlt: "BF-chicken-nuggets-200g",
    name: "Chicken Nuggets",
    weight: "200g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 6,
    imageSrc: "/images/BF-chicken-popcorn-200g.jpeg",
    imageAlt: "BF-chicken-popcorn-200g",
    name: "Chicken Popcorn",
    weight: "200g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 7,
    imageSrc: "/images/BF-chicken-sticks-200g.jpeg",
    imageAlt: "BF-chicken-sticks-200g",
    name: "Chicken Sticks",
    weight: "200g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 8,
    imageSrc: "/images/BF-chicken-thighs-860g.jpeg",
    imageAlt: "BF-chicken-thighs-860g",
    name: "Chicken Thighs",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
  },
  {
    id: 9,
    imageSrc: "/images/BF-chicken-wings-860g.jpeg",
    imageAlt: "BF-chicken-wings-860g",
    name: "Chicken Wings",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
  },
  {
    id: 10,
    imageSrc: "/images/BF-drumstick-860g.jpeg",
    imageAlt: "BF-drumstick-860g",
    name: "Chicken Drumsticks",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
  },

  {
    id: 11,
    imageSrc: "/images/BF-everyday-chicken-piece.jpeg",
    imageAlt: "BF-everyday-chicken-piece",
    name: "Everyday Chicken",
    weight: "",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 160,
  },
  {
    id: 12,
    imageSrc: "/images/BF-family-feast-chicken.jpeg",
    imageAlt: "BF-family-feast-chicken",
    name: "Family Feast Chicken",
    weight: "",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 280,
  },
  {
    id: 13,
    imageSrc: "/images/BF-free-range-chicken.jpeg",
    imageAlt: "BF-free-range-chicken",
    name: "Free Range Chicken",
    weight: "",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 250,
  },
  {
    id: 14,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-pepper-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-pepper-550g",
    name: "Marinated Chicken Cut Ups (Pepper)",
    weight: "550g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 115,
  },
  {
    id: 15,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-spicy-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-spicy-550g",
    name: "Marinated Chicken Cut Ups (Spicy)",
    weight: "550g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 115,
  },
  {
    id: 16,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-sweet-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-sweet-550g",
    name: "Marinated Chicken Cut Ups (Spicy)",
    weight: "550g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 115,
  },
  {
    id: 17,
    imageSrc: "/images/BF-marinated-chicken-neck-500g.jpeg",
    imageAlt: "BF-marinated-chicken-neck-500g",
    name: "Marinated Chicken Neck",
    weight: "500g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 80,
  },
  {
    id: 18,
    imageSrc: "/images/BF-premium-chicken.jpeg",
    imageAlt: "BF-premium-chicken",
    name: "Premium Chicken",
    weight: "",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 250,
  },
  {
    id: 19,
    imageSrc: "/images/BF-saucy-torikaraage-sweet-and-sour-450g.jpeg",
    imageAlt: "BF-saucy-torikaraage-sweet-and-sour-450g",
    name: "Saucy Torikaraage (Sweet and Sour)",
    weight: "450g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
  },
  {
    id: 20,
    imageSrc: "/images/BF-saucy-torikaraage-teriyaki-450g.jpeg",
    imageAlt: "BF-saucy-torikaraage-teriyaki-450g",
    name: "Saucy Torikaraage (Sweet and Sour)",
    weight: "450g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
  },

  {
    id: 21,
    imageSrc: "/images/BF-chicken-thigh-fillets-860g.jpeg",
    imageAlt: "BF-chicken-thigh-fillets-860g",
    name: "Chicken Thigh Fillets",
    weight: "860g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 290,
  },
  {
    id: 22,
    imageSrc: "/images/BF-top-toriburger-cheese-and-chives-450g.jpeg",
    imageAlt: "BF-top-toriburger-cheese-and-chives-450g",
    name: "Top Toriburger (Cheese and Chives)",
    weight: "450g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 200,
  },
  {
    id: 23,
    imageSrc: "/images/BF-top-toriburger-classic-mayo-450g.jpeg",
    imageAlt: "BF-top-toriburger-classic-mayo-450g",
    name: "Top Toriburger (Classic Mayo)",
    weight: "450g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 200,
  },
  {
    id: 24,
    imageSrc: "/images/BF-top-torikatsu-cheese-and-chives-450g.jpeg",
    imageAlt: "BF-top-torikatsu-cheese-and-chives-450g",
    name: "Top Torikatsu (Cheese and Chives)",
    weight: "450g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
  },
  {
    id: 25,
    imageSrc: "/images/BF-top-torikatsu-classic-mayo-450g.jpeg",
    imageAlt: "BF-top-torikatsu-classic-mayo-450g",
    name: "Top Torikatsu (Classic Mayo)",
    weight: "450g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 220,
  },
  {
    id: 26,
    imageSrc: "/images/BF-young-and-tender-chicken.jpeg",
    imageAlt: "BF-young-and-tender-chicken",
    name: "Young and Tender Chicken",
    weight: "",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 190,
  },
  {
    id: 27,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 28,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 29,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 30,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },

  {
    id: 31,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 32,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 33,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 34,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 35,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 36,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 37,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 38,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 39,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
  {
    id: 40,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
  },
];

export default function Example() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          All Products
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4 h-16">
                  <div className="flex justify-between ">
                    <h3 className="text-md font-medium text-gray-900 hover:text-red-500">
                      <a href={`/products/${product.id}`}>{product.name}</a>
                    </h3>
                    <div className="ml-2">
                      <p className="relative text-lg font-semibold text-red-500">
                        ₱{product.price}
                      </p>
                    </div>
                  </div>
                  <p className="relative text-sm font-semibold text-gray-500">
                    {product.brand}
                  </p>
                </div>
                <a href={`/products/${product.id}`}>
                  <div className="absolute inset-x-0 top-0  flex h-72 cursor-pointer items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36  bg-gradient-to-t from-neutral-500 to-white opacity-10  hover:opacity-5"
                    />
                  </div>
                </a>
              </div>
              {/* ADD KILOS INPUT */}
              <div className="mt-6">
                <a
                  href="#"
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-400"
                >
                  Add to cart<span className="sr-only"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
