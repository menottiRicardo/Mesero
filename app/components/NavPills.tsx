import { NavLink } from "@remix-run/react";

interface NavpillsProps {
  title: string;
  route: string;
}
const NavPills = ({ title, route }: NavpillsProps) => {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) =>
        isActive ? "font-medium text-lg underline underline-offset-4 decoration-wavy decoration-blue-200" : "text-gray-500"
      }
      prefetch="render"
    >
      {title}
    </NavLink>
  );
};

export default NavPills;
