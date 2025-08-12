"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Proptypes from "prop-types";

export const Navbar = ({ data }) => {
  const pathname = usePathname();
  return (
    <nav className="shadow p-4">
      <div className="flex mx-auto justify-between items-center">
        <div className="flex space-x-6">
          {data.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={index}
                href={item.href}
                className={isActive ? "font-bold text-orange-400" : ""}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div>Logout</div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  data: Proptypes.array,
};

Navbar.defaultProps = {
  data: [],
};
