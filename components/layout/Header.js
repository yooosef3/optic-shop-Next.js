import React, { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";

import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "./Layout";
import Image from "next/image";
import ItemsHistory from '../header/ItemsHistory'
import Link from "next/link";
import Menu from "../header/Menu";
import { RiUserLine } from "react-icons/ri";
import RightSidebar from "../header/RightSidebar";
import Search from "../header/Search";
import logo from "../../public/images/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [icon, setIcon] = useContext(IconContext);
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const { data: session, status } = useSession();
  const items = useSelector((state) => state.cart.items);

  if (typeof document !== "undefined") {
    if (icon.search) {
      document.body.classList = "overflow-hidden";
    } else {
      document.body.classList = "";
    }
  }

  return (
    <header className="p-5 z-10 fixed max-w-[1600px] left-0 right-0 mx-auto bg-[#F4F4F4] shadow-md flex justify-between items-center">
      <div className="flex items-center gap-3 md:gap-5">
        <div className="ml-1">
          <FiMenu
            onClick={() => setIcon({ menu: !icon.menu })}
            className="text-3xl lg:hidden text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
          />
          <RightSidebar />
        </div>
        <div>
          <div className="relative" onClick={() => setToggleCart(!toggleCart)}>
            <CgShoppingCart className="text-2xl text-gray-700 hover:text-[#045868] duration-300 cursor-pointer" />
            <span className="absolute -top-3 -right-2 font-bold text-red-600">
              {items.length}
            </span>
          </div>
          <ItemsHistory toggleCart={toggleCart} />
        </div>
        {status === "loading" ? (
          <div>Loading...</div>
        ) : session ? (
          <div
            onClick={() => setToggle(!toggle)}
            className="relative flex italic items-center gap-3 text-gray-700 hover:text-[#045868] duration-300 cursor-pointer"
          >
            <Image
              className="rounded-full w-[25px] md:w-[35px] h-[25px] md:h-[35px] ring ring-[#287D93]"
              alt="account"
              width={35}
              height={35}
              src={session.user.image}
            />
            <h3 className=" font-bold text-sm md:text-base pt-2">
              {session.user.name}
            </h3>
            <div
              className={`absolute overflow-hidden top-10 ${
                !toggle && "hidden"
              } bg-white shadow-md w-full rounded-md`}
            >
              <Link href="/">
                <h3 className="text-gray-700 py-1 pr-3 hover:text-[#045868] hover:bg-gray-50 duration-300 cursor-pointer">
                  خانه
                </h3>
              </Link>
              <h3
                onClick={() => signOut()}
                className="text-red-700 py-1 pr-3 hover:text-red-800 hover:bg-gray-50 duration-300 cursor-pointer"
              >
                خروج
              </h3>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <div className="flex items-center gap-2 text-gray-700 hover:text-[#045868] duration-300 cursor-pointer">
              <RiUserLine className="text-xl" />
              <h3 className="text-lg font-bold hidden lg:block">ورود</h3>
            </div>
          </Link>
        )}
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
