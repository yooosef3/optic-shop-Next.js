import Image from "next/image";
import React from "react";

const Item = ({ item }) => {
  return (
    <div className="flex justify-between w-[95%] mx-auto my-4">
      <div className="h-10 w-[30%] ring ring-slate-100 rounded-md p-1 pt-3">
        <Image src={item.images[1]} width={70} height={70} alt={item.name} />
      </div>
      <div className="text-left">
        <h1 className="font-bold">{item.name}</h1>
        <div className="flex gap-3">
          <h1 className="text-red-600 font-bold">X{item.quantity}</h1>
          <h1 className="text-gray-400 font-bold">{(item.price*item.quantity).toLocaleString()} تومان</h1>
        </div>
      </div>
    </div>
  );
};

export default Item;
