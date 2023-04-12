import React, { createContext, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Menu from "../header/Menu";
import RightSidebar from "../header/RightSidebar";
import SearchInput from "../header/SearchInput";
import logo from "../../public/images/logo.png";
export const IconContext = createContext();
const Header = () => {
  const [icon, setIcon] = useState({
    menu: false,
    search: false,
    cart: false,
    user: false,
  });
  return (
    <IconContext.Provider value={[icon, setIcon]}>
      <header className="p-5 z-10 fixed w-full bg-[#F4F4F4] shadow-md flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div>
            <FiMenu
              onClick={() => setIcon({ menu: !icon.menu })}
              className="text-3xl lg:hidden text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
            />
            <RightSidebar />
          </div>
          <div className="relative">
            <Link href="/">
              <CgShoppingCart className="text-3xl text-gray-700 hover:text-[#045868] duration-300 cursor-pointer" />
              <span className="absolute -top-3 -right-2 font-bold text-red-600">
                0
              </span>
            </Link>
          </div>
        </div>
        <Link href="/">
          <Image alt="logo" width={90} height={30} src={logo} />
        </Link>
        <div className="flex items-center">
          <Menu />
          <div>
            <BsSearch
              onClick={() => setIcon({ search: !icon.search })}
              className="text-xl text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
            />
            <SearchInput />
          </div>
        </div>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
