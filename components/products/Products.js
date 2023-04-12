import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import ProductCard from "../home/featured/ProductCard";
import mainBg from "../../public/images/Pattern.webp";

const Products = ({ data }) => {
  const [price, setPrice] = useState(30);
  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${mainBg.src})` }}
        className="bg-cover py-20 lg:px-10 bg-no-repeat bg-center"
      >
        <div className="lg:w-[95%] mx-auto flex flex-col lg:flex-row lg:justify-center gap-32">
          <div className="w-[90%] md:w-[85%] lg:w-[30%] xl:w-[25%] mx-auto lg:ml-auto lg:mt-0">
            <section>
              <h1 className="text-black mb-5 text-xl font-bold">
                فیلتر محصولات براساس قیمت
              </h1>
              <div className="border p-5 rounded-lg bg-[#002e38] shadow-md">
                <input
                  max={60}
                  className="mx-auto w-full bg-yellow-400"
                  type="range"
                  onInput={handleInput}
                />
                <h1 className="text-white font-semibold">
                  قیمت : <span className="text-[#007d99] text-lg">0$ تا {price}$</span>
                </h1>
              </div>
            </section>
            <section className="mt-14 ">
              <h1 className="text-black mb-5 text-xl font-bold">
                جستجوی محصولات
              </h1>
              <div className="relative h-12 shadow-lg">
                <input
                  type="search"
                  className="w-full rounded-lg border border-gray-300 focus:border-blue-500 bg-white outline-none h-full pr-2 text-lg font-semibold text-black"
                  placeholder="جستجو..."
                />
                <FiSearch className="absolute left-2 top-4 text-gray-700 hover:text-red-600 duration-200 cursor-pointer" />
              </div>
            </section>
          </div>
          <div className="w-[90%] lg:w-[70%] xl:w-[75%] mx-auto">
            <div className="flex relative flex-col gap-5 justify-center items-center sm:flex-row sm:flex-wrap">
              {data.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
