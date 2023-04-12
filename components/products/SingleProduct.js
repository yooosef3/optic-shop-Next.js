import { AiFillMinusSquare } from "react-icons/ai";
import { BiAtom } from "react-icons/bi";
import { BsEyeglasses } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import React from "react";
import { TbResize } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

const SingleProduct = ({ product }) => {
  return (
    <div className="bg-white px-5 py-10 lg:w-[50%]">
      <div className="w-[90%] mx-auto">
        <div className="flex mb-2 lg:mb-4">
          <TbStarFilled className="text-yellow-400" />
          <TbStarFilled className="text-yellow-400" />
          <TbStarFilled className="text-yellow-400" />
          <TbStarFilled className="text-yellow-400" />
          <TbStarHalfFilled className="text-yellow-400" />
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold text-slate-700 mb-5">
          {product.name}
        </h1>
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-[#034a64]">
            ${product.price}
          </h1>
          <h1 className="text-2xl font-semibold text-gray-400 line-through">
            ${product.noOff}
          </h1>
        </div>
        <p className="my-10 text-gray-700">{product.info}</p>
        <div className="md:flex md:justify-between md:items-center lg:flex-col lg:items-start">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <BsEyeglasses className="text-xl text-gray-500" />
              <h1 className="text-xl font-semibold">جزییات محصول</h1>
            </div>
            <div className="pr-2 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <TbResize className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">انداره:</h1>
                <h1 className="text-gray-400 font-semibold">{product.size}</h1>
              </div>
              <div className="flex items-center gap-4">
                <FaWeightHanging className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">وزن:</h1>
                <h1 className="text-gray-400 font-semibold">
                  {product.weight}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <BiAtom className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">جنس:</h1>
                <h1 className="text-gray-400 font-semibold">
                  {product.material}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-10 mb-10">
              <div className="flex gap-2 items-center">
                <BsFillPlusSquareFill className="text-red-600 text-2xl hover:text-red-700 rounded-sm cursor-pointer duration-200" />
                <span className="text-xl font-bold text-yellow-800">1</span>
                <AiFillMinusSquare className="text-green-600 text-3xl hover:text-green-700 rounded-full cursor-pointer duration-200" />
              </div>
              <div>
                <h1 className="bg-[#034a64] hover:bg-[#033c51] duration-200 cursor-pointer rounded-md py-2 px-3 text-white font-semibold">
                  سبد خرید
                </h1>
              </div>
            </div>
            <div className="flex justify-center my-6 text-gray-400 text-xl gap-5">
              <FaLinkedinIn className="hover:text-blue-600 duration-200 cursor-pointer" />
              <FaTiktok className="hover:text-gray-900 duration-200 cursor-pointer" />
              <ImFacebook className="hover:text-blue-800 duration-200 cursor-pointer" />
              <ImTwitter className="hover:text-blue-500 duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
