import ProductsPage, { Category } from "./products";

export default function ChickenPage() {
  return <ProductsPage onlyCategory={Category.BEEF} />;
}
