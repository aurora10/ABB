import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px]">
      <Image src="/images/hero.webp" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg lg:text-2xl">
          Not sure whare to go? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 font-bold
        hover:shadow-xl active:scale-90 transition duration-150 "
        >
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
