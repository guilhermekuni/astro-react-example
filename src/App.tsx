import { PRODUCTS } from "./data/products";
import { ProductItem } from "./components/ProductItem";

function App() {
  return (
    <>
      <h1>hello world - React</h1>
      <section>
        {PRODUCTS.map(({ id, name, image }) => (
          <ProductItem key={id} id={id} name={name} img={image} />
        ))}
      </section>
    </>
  );
}

export default App;
