import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { LeftArrow, LeftArrow2 } from "../common/Icons";

const PosHero = ({ data }) => {
  const router = useRouter();
  const seePricing = () => {
    router.push("/apps/pricing/POS");
  };

  return (
    <div>
      <div className="container mx-auto px-3">
        <div className="flex justify-center">
          <h1 className="font-Inter text-darkBlack font-bold sm:mx-0 mx-[5px] leading-[42px] sm:leading-[50px] md:leading-[70px]  mt-[50px] sm:mt-[90px] max-w-[350px] sm:max-w-[700px]  text-center text-2xl md:text-[48px]">
            {data.title}
          </h1>
        </div>
        <div className="flex justify-center mt-[17px] sm:mt-[34px]">
          <p className="font-Inter font-normal text-sm sm:text-md max-w-[738px] text-center text-lightgrey ">
            {data.subtitle}
          </p>
        </div>
        <div className="flex justify-center lg:justify-start flex-col sm:flex-row  sm:mt-[28px]">
          <button
            onClick={seePricing}
            className="mt-5 sm:mt-[0px] bg-blue   w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lightblue"
          >
            {data.button1}
            <LeftArrow />
          </button>
          <button
            onClick={seePricing}
            className="mt-5 sm:mt-[0px] sm:ml-[22px] bg-greyshade1 w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lg"
          >
            {data.button2}
            <LeftArrow2 />
          </button>
        </div>
      </div>
      <Image
        className=" mt-[20px] sm:mt-[40px]"
        src={data.HeroImg}
        width={1920}
        height={561}
        alt="pos hero img"
      />
    </div>
  );
};

export default PosHero;
