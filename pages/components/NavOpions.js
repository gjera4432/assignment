import React from "react";

const NavOptions = ({ navItems }) => {
  return (
    <ul className="list-none m-0 p-0 flex">
      {navItems.map((item, index) => (
        <a key={index} href={item.url} className="text-white no-underline">
          <li className="mr-4 hover:border-2 hover:border-dashed hover:bg-slate-400 p-3">
            {item.name}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default NavOptions;
