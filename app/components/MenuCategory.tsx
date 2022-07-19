import { Link } from "@remix-run/react";

interface MenuCategoryProps {
  title: string;
  icon: any;
  selected: string | undefined;
  tableId: string | undefined;
  id: string;
}
const MenuCategory = ({
  title,
  icon,
  selected,
  tableId,
  id,
}: MenuCategoryProps) => {
  return (
    <Link
      to={`/table/${tableId}/category/${id}`}
      className={`flex flex-col justify-center items-center rounded-md p-4 ${
        selected === id
          ? "font-bold bg-white shadow-lg"
          : "bg-gray-50 shadow-sm text-gray-500 border border-gray-100"
      } min-w-[8.5rem] mx-2`}
    >
      <p className="mb-4">{title}</p>
      {icon}
    </Link>
  );
};

export default MenuCategory;
