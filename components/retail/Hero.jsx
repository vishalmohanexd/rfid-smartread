import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { LeftArrow, LeftArrow2 } from "../common/Icons";

const Hero = () => {

  const router = useRouter()
  const seePricing = () =>{
    router.push('/pricing')
  }

  const contactSales = () =>{
    router.push('/resources/contact')
  }

  return (
    <div className="3xl:h-[768px] bg-center 2xl:bg-left bg-no-repeat bg-cover inventory_bg_img sm:h-[690px] h-[90vh]">
      <div className="max-w-[1120px] mx-auto h-full px-3 xl:px-0  flex-grow flex flex-col justify-center">
        <h1 className="font-bold text-dark text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[46px] md:leading-[65px] text-center lg:text-start max-w-[750px] mx-auto lg:mx-0 w-full ">
        Embrace innovation with one flexible platform
        </h1>
        <p className="text-md text-dark sm:text-md font-normal mt-[13px] mx-auto lg:mx-0  max-w-[538px] text-center lg:text-start max-w-[638px] w-full">
        Seamlessly adapt to market trends and customer needs 
        a suite of solutions for Retail businesses to drive success and stay ahead of the curve
        </p>
        <div className="flex justify-center lg:justify-start flex-col sm:flex-row  sm:mt-[28px]">
            <button onClick={contactSales} className="mt-7 sm:mt-[0px] bg-blue   w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lg">
              Contact Sales
              <LeftArrow />
            </button>
            <button onClick={seePricing} className="mt-7 sm:mt-[0px] sm:ml-[22px] bg-greenlantern w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lg">
              See Pricing
              <LeftArrow2 />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
