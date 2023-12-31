type ProductItemProps = {
  id: number;
  name: string;
  img: string;
  price: number;
};

export const ProductItem = ({ id, name, img, price }: ProductItemProps) => {
  return (
    <div className="row flex bg-orange-200 p-4 rounded-xl">
      <img
        className="rounded-lg"
        height={200}
        width={200}
        src={img}
        alt={name}
      />
      <section className="col px-2 text-amber-900">
        <h2 className="text-lg">
          #{id} - {name}
        </h2>
        <h3 className="text-md">$ {price}</h3>
      </section>
    </div>
  );
};
