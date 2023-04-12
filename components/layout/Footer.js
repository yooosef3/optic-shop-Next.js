import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";
import { MdOutlineFax } from "react-icons/md";
import React from "react";
import { RiTwitterLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#043d45] p-10">
      <Link href="/">
        <Image width={90} height={30} alt="logo" src={logo} />
      </Link>
      <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div className="col-span-1">
          <h1 className="font-bold text-white text-lg mb-4">
            شبکه های اجتماعی
          </h1>
          <ul className="flex flex-col gap-1">
            <Link href="https://www.instagram.com/code.load" target="_blank">
              <div className="flex items-center gap-1  ">
                <AiOutlineInstagram className="text-xl text-orange-700" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  code.load
                </h1>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yusef-khedri-a03956261/"
              target="_blank"
            >
              <div className="flex items-center gap-1  ">
                <FaLinkedin className="text-xl text-blue-700" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  Yusef Khedri
                </h1>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-1  ">
                <RiTwitterLine className="text-xl text-blue-500" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  jozeph3
                </h1>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-1  ">
                <GrFacebookOption className="text-xl text-blue-700" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  Yusef.Kh
                </h1>
              </div>
            </Link>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-white text-lg mb-4">راه های ارتباطی</h1>
          <ul className="flex flex-col gap-1">
            <Link href="tel:09226308183">
              <div className="flex items-center gap-1  ">
                <IoMdPhonePortrait className="text-xl text-black" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  0922-630-8183
                </h1>
              </div>
            </Link>
            <Link href="mailto:yooosef.khedri@gmail.com">
              <div className="flex items-center gap-1  ">
                <HiOutlineMail className="text-xl text-green-700" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  yooosef.khedri@gmail.com
                </h1>
              </div>
            </Link>
            <Link href="https://www.google.com/" target="_blank">
              <div className="flex items-center gap-1  ">
                <TbWorldWww className="text-xl text-blue-200" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  Google
                </h1>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-1  ">
                <MdOutlineFax className="text-xl text-yellow-600" />
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  478251-254754
                </h1>
              </div>
            </Link>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-white text-lg mb-4">صفحات</h1>
          <ul className="pr-5 flex flex-col gap-2">
            <Link href="/">
              <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                خانه
              </h1>
            </Link>
            <Link href="/products">
              <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                محصولات
              </h1>
            </Link>
            <Link href="/cart">
              <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                سبد خرید
              </h1>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
