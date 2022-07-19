interface ProductProps {
  categoryId?: string;
  createdAt?: string;
  description: string;
  flavors: string[];
  id: string;
  name: string;
  qty?: number;
  sizes: any;
  tenantId?: string;
  updatedAt?: string;
}
const Product = ({ name, flavors, id, sizes, description }: ProductProps) => {
  return (
    <div className="bg-white shadow-lg rounded-md w-54 h-76">
      {/* image */}
      <div className="h-28 w-54 bg-red-400 rounded-t-md"></div>
      {/* title */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <p className="text-gray-500 text-sm my-2">{description}</p>

        <div className="flex justify-around">
          {sizes.S && <p className="font-bold">${sizes.S}</p>}
          {sizes.M && <p className="font-bold">${sizes.M}</p>}
          {sizes.L && <p className="font-bold">${sizes.L}</p>}
        </div>

        <div className="flex justify-around">
          {flavors?.map((flavor) => (
            <span key={flavor} className="text-light">
              ~{flavor}~
            </span>
          ))}
        </div>
        {sizes.price && <p className="font-bold text-xl">${sizes.price}</p>}
      </div>
    </div>
  );
};

export default Product;
