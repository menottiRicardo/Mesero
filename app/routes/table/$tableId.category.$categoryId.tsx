import { json, LoaderFunction } from "@remix-run/node";
import { faker } from "@faker-js/faker";
import { useLoaderData, useParams } from "@remix-run/react";
import { BiDrink, BiFoodMenu } from "react-icons/bi";
import { FaHamburger, FaIceCream } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import MenuCategory from "~/components/MenuCategory";
import Product from "~/components/Product";

export const loader: LoaderFunction = async ({ params }) => {
  const rawCategories = await fetch(
    "https://hqvrl2yhj3.execute-api.us-east-1.amazonaws.com/getCategories?tenantId=123"
  );
  const categories = await rawCategories.json();
  let products: any;
  switch (params.categoryId) {
    case "999":
      const rawProducts = await fetch(
        "https://hqvrl2yhj3.execute-api.us-east-1.amazonaws.com/getProducts?tenantId=123&categoryId=999"
      );
      products = await rawProducts.json();
      return json({ products, categories });

    default:
      const rawproducts = await fetch(
        `https://hqvrl2yhj3.execute-api.us-east-1.amazonaws.com/getProducts?tenantId=123&categoryId=${params.categoryId}`
      );
      products = await rawproducts.json();
      return json({ products, categories });
  }
};
const TableId = () => {
  const { tableId, categoryId } = useParams();
  const { products, categories } = useLoaderData();
  console.log(products.products);
  return (
    <div className="flex relative">
      {/* menu */}
      <div className="w-3/4 bg-slate-50 relative">
        <ul className="flex mt-4 p-4 overflow-x-auto">
          <MenuCategory
            title="Todo"
            icon={<BiFoodMenu size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
            id="999"
          />
          {categories.categories.map((category: any) => (
            <MenuCategory
              title={category.name}
              icon={<BiFoodMenu size={"1.5em"} />}
              selected={categoryId}
              tableId={tableId}
              key={category.id}
              id={category.id}
            />
          ))}
        </ul>
        <div className="overflow-scroll w-full h-[38rem] px-2">
          <div className="grid grid-cols-3 gap-4">
            {products.products.map((product: any) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                sizes={product.sizes}
                flavors={product.flavors}
              />
            ))}
          </div>
        </div>
      </div>

      {/* check */}
      <div className="bg-red-100 w-1/3">check table id {tableId}</div>
    </div>
  );
};

export default TableId;
