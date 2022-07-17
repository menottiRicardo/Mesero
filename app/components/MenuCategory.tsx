import { Link } from "@remix-run/react";

interface MenuCategoryProps {
  title: string;
  icon: any;
  selected?: string;
  tableId: string | undefined;
}
const MenuCategory = ({
  title,
  icon,
  selected,
  tableId,
}: MenuCategoryProps) => {
  return (
    <Link
      to={`/table/${tableId}/category/${title}`}
      className={`grid rounded-md p-4 justify-items-center ${
        selected === title
          ? "font-bold bg-white shadow-lg"
          : "bg-gray-50 shadow-sm text-gray-500 border border-gray-100"
      } min-w-[6.3rem]`}
    >
      <span className="mb-4">{title}</span>
      {icon}
    </Link>
  );
};

export default MenuCategory;
