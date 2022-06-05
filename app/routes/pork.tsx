import { Category } from '@prisma/client'
import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ProductsPage } from '~/components/ProductsPage'
import { db } from '~/utils/db.server'
import { Product } from './products'

export const loader: LoaderFunction = async ({ params }) => {
  const products = await db.product.findMany({
    where: {
      category: 'PORK',
    },
  })
  return products
}

export default function PorkPage() {
  const category = Category.PORK
  const products: Product[] = useLoaderData()
  return <ProductsPage {...{ products, category }} />
}
