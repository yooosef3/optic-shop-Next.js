import React, { useContext } from "react";

import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "./Layout";
import Image from "next/image";
import Link from "next/link";
import Menu from "../header/Menu";
import RightSidebar from "../header/RightSidebar";
import Search from "../header/Search";
import logo from "../../public/images/logo.png";
import { useSelector } from 'react-redux';

const Header = () => {
  const [icon, setIcon] = useContext(IconContext);

  const items = useSelector((state) => state.cart.items)
  
  if (typeof document !== "undefined") {
    if (icon.search) {
      document.body.classList = "overflow-hidden";
    } else {
      document.body.classList = "";
    }
  }

  return (
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
          <Link href="/cart">
            <CgShoppingCart className="text-3xl text-gray-700 hover:text-[#045868] duration-300 cursor-pointer" />
            <span className="absolute -top-3 -right-2 font-bold text-red-600">
            {items.length}
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
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
