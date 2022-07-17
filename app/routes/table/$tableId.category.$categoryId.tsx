import { useParams } from "@remix-run/react";
import { BiDrink, BiFoodMenu } from "react-icons/bi";
import { FaHamburger, FaIceCream } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import MenuCategory from "~/components/MenuCategory";

const TableId = () => {
  const { tableId, categoryId } = useParams();
  console.log(tableId);
  return (
    <div className="flex relative">
      {/* menu */}
      <div className="w-3/4 bg-slate-50 relative">
        <ul className="flex mt-4 p-4 justify-around">
          <MenuCategory
            title="Todo"
            icon={<BiFoodMenu size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Hamburguesas"
            icon={<FaHamburger size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Ensaladas"
            icon={<GiTomato size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />

          <MenuCategory
            title="Postres"
            icon={<FaIceCream size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
        </ul>
        <div className="overflow-scroll w-full h-[38rem] px-2">
          <div className="grid grid-cols-3 gap-4">
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          <MenuCategory
            title="Bedidas"
            icon={<BiDrink size={"1.5em"} />}
            selected={categoryId}
            tableId={tableId}
          />
          </div>
        </div>
      </div>

      {/* check */}
      <div className="bg-red-100 w-1/3">check table id {tableId}</div>
    </div>
  );
};

export default TableId;