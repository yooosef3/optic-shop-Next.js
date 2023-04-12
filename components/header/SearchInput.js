import Link from "next/link";
import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "../layout/Header";

const SearchInput = () => {

  const [searched, setSearched] = useState("");
  const [icon] = useContext(IconContext)
  return (
    <div className={`fixed left-5 ${icon.search ? 'opacity-100 top-16' : 'opacity-0  top-6 -z-10'} duration-500 w-[340px] mx-auto`}>
      <div className="relative h-11 shadow-md rounded-lg overflow-hidden">
        <input
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
          placeholder="جستجوی محصول"
          className="w-full h-full pr-2 rounded-md outline-none border focus:border-blue-500"
        />
        <Link href='/'>
          <BsSearch className="absolute left-2 top-4 hover:text-[#045868] duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SearchInput;
