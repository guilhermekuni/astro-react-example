import { PRODUCTS } from "../data/products";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {PRODUCTS.map(({ id, name, image, price }) => (
        <ProductItem key={id} id={id} name={name} img={image} price={price} />
      ))}
    </section>
  );
};
