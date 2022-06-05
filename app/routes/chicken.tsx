import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ProductsPage } from '~/components/ProductsPage'
import { db } from '~/utils/db.server'
import { Category, Product } from './products'

export const loader: LoaderFunction = async ({ params }) => {
  const products = await db.product.findMany({
    where: {
      category: 'CHICKEN',
    },
  })
  return products
}

export default function ChickenPage() {
  const category = Category.CHICKEN
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
