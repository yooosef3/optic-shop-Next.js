import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ProductCard = ({ name, title, price, noOff, images, id }) => {
  const router = useRouter();
  console.log(router);
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(50%)" }}
      whileInView={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mx-auto group w-fit p-5 pt-7 bg-white rounded-lg shadow-md hover:shadow-lg duration-700 h-60 flex flex-col justify-between"
    >
      <Link href={`/products/${id}`}>
        {router.pathname === "/products" ? (
          <div>
            <Image
              className="duration-700 group-hover:hidden"
              width={250}
              height={300}
              alt="eyeglass"
              src={images[1]}
            />
            <Image
              className="duration-700 hidden group-hover:block"
              width={250}
              height={300}
              alt="eyeglass"
              src={images[0]}
            />
          </div>
        ) : (
          <Image
            className="lg:group-hover:scale-105 duration-700"
            width={250}
            height={300}
            alt="eyeglass"
            src={images[1]}
          />
        )}
      </Link>
      <div className="text-center">
        <Link href={`/products/${id}`}>
          <h1 className="font-semibold text-xl hover:text-[#045868] duration-300 cursor-pointer w-fit mx-auto">
            {name}
          </h1>
        </Link>
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <div>
          <span className="text-green-600 text-lg font-bold mr-2">
            ${price}
          </span>
          <span className="text-gray-400 line-through text-sm">${noOff}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
