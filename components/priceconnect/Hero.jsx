import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LeftArrow, LeftArrow2 } from "../common/Icons";

const Hero = () => {
  return (
    <div className="max-w-[1120px] px-3 3xl:px-0 mx-auto sm:mt-[50px] mt-[30px] md:mt-[70px] xl:mt-[80px] ">
      <div className="flex flex-col lg:flex-row ">
        <div>
          <h1 className="font-bold text-center lg:text-start text-[30px] sm:text-3xl  xl:text-[42px] leading-[40px] sm:leading-[46px] lg:leading-[46px] xl:leading-[60px]  lg:max-w-[100%] text-darkBlack ">
         Dynamic Pricing Intelligence for the Modern Retailer
          </h1>
          <p className="font-normal text-[21px] sm:text-[21px] mt-[15px] xl:mt-[34px] mx-auto lg:mx-0 text-lightgrey text-center lg:text-start max-w-[590px]">
          Elevate Your Pricing Strategy with Price Connect : A Smart, AI-Driven Pricing Solution Tailored for Today's Competitive Retail Landscape
          </p>
          <div className="flex justify-center lg:justify-start flex-col sm:flex-row  sm:mt-[50px]">
            <Link href="/resources/contact">
              <button className="mt-5 sm:mt-[0px] bg-blue w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lg hover:shadow-lg hover:shadow-greyshade1">
                Contact Sales
                <LeftArrow />
              </button>
            </Link>
          
          </div>
        </div>
        <div className="lg:max-w-[400px] mx-auto lg:mx-0 max-w-[600px] mt-10 lg:mt-0 3xl:max-w-[882px] 3xl:mr-[-60px] ">
          <Image
            src="/images/price-connect-hero.webp"
            width={882}
            height={684}
            alt="noton hero img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
