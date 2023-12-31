type ProductItemProps = {
  id: number;
  name: string;
  img: string;
};

export const ProductItem = ({ name, img }: ProductItemProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
};
