import { LoaderFunction, useLoaderData } from 'remix'
import { ProductsPage } from '~/components/ProductsPage'
import { db } from '~/utils/db.server'
import { Category, Product } from './products'

export const loader: LoaderFunction = async ({ params }) => {
  const products = await db.product.findMany({
    where: {
      category: 'BEEF',
    },
  })
  return products
}

export default function BeefPage() {
  const category = Category.BEEF
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
