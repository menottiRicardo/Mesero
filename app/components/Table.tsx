import { Link } from "@remix-run/react";

interface TableProps {
  full: boolean;
  number: string;
  id?: string;
}

const Table = ({ full, number, id }: TableProps) => {
  return (
    <Link to={`/table/${number}/category/999`}>
      <div
        className={`w-20 h-20 ${
          full === true ? "bg-red-400" : "bg-gray-200"
        } shadow-md rounded-md`}
      >
        <p
          className={`flex items-center justify-center h-full ${
            full === true ? "text-white" : "text-gray-500"
          } font-medium text-2xl`}
        >
          {number}
        </p>
      </div>
    </Link>
  );
};

export default Table;
