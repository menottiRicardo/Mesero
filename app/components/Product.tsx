import { faker } from "@faker-js/faker";
const Product = () => {
  return (
    <div className="bg-white shadow-lg rounded-md w-54 h-76">
      {/* image */}
      <img src={faker.image.food()} alt="" className="rounded-t-md" />
      {/* title */}

      <h2 className="font-medium text-xl">{faker.commerce.product()}</h2>

      <p className="text-gray-500 text-sm">
        {faker.commerce.productDescription()}
      </p>

      <div className="grid grid-cols-3 justify-items-center">
        <p className="font-bold">S</p>
        <p className="font-bold">M</p>
        <p className="font-bold">L</p>
        
      </div>
      <p>{faker.commerce.price(5, 100, 2, "$")}</p>
    </div>
  );
};

export default Product;
