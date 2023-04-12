import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import React from "react";

function Slider({ product }) {
  return (
    <div className="lg:w-[50%] pb-10 pt-20 lg:px-10">
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        className="detail w-[350px] md:w-[400px] xl:w-[500px] h-[300px] md:h-[350px] xl:h-[450px] shadow-xl rounded-lg"
      >
        {product.images.map((image) => (
          <SwiperSlide className="p-5 bg-white">
            <Image
              className="mt-[25%]"
              src={image}
              width={800}
              height={500}
              alt={product.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
