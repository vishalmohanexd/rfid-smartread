import Link from "next/link";
import React from "react";
import { LeftArrow, LeftArrow2 } from "../common/Icons";


const Hero = () => {
  return (
    <div className="restaurent_bg_image bg-bottom 3xl:h-[768px] h-[91vh] sm:h-[690px] bg-cover bg-no-repeat">
      <div className="max-w-[1300px] h-full mx-auto px-3 lg:px-0  ">
        <div className="flex justify-center h-full flex-col items-center ">
          
        <h1 className="text-[39px] sm:text-3xl md:text-4xl leading-[40px] sm:leading-[46px] md:leading-[58px] text-center font-bold text-dark">
          Comprehensive solutions for the Food Industry
          </h1>
          <div className="flex justify-center w-full flex-col sm:flex-row  sm:mt-[90px]">
            <Link href="/resources/contact">
              <button className="mt-5 sm:mt-[0px] bg-greenlantern  w-full sm:w-[218px] h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal transition-all duration-200 ease-in hover:shadow-lg">
                Contact Sales
                <LeftArrow />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="mt-5 sm:mt-[0px] sm:ml-[22px] bg-white w-full sm:w-[218px] h-[45px] sm:h-[55px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal transition-all duration-200 ease-in hover:shadow-lg">
                See Pricing
                <LeftArrow2 />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
