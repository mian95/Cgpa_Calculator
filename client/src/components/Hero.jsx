import React from "react";
import { CiCalculator2 } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <div className="py-36 sm:py-42 gap-5 flex flex-col max-w-full  drop-shadow-lg justify-center items-center bg-transparent ">
        <CiCalculator2 className="h-[150px] w-[150px]  drop-shadow-2xl opacity-95 text-custom" />

        <h2 className="font-bold md:text-5xl lg:text-6xl text-3xl   drop-shadow-lg text-custom">
          Uaf Cgpa Harvest
        </h2>
        <p className="font-thin md:text-lg text-sm text-custom  drop-shadow-lg  opacity-75">
          Get best results for your CGPA
        </p>
      </div>
    </div>
  );
};

export default Hero;
