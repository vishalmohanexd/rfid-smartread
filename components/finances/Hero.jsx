import Link from "next/link";
import React from "react";
import { LeftArrow, LeftArrow2 } from "../common/Icons";

const Hero = () => {
  return (
    <div className="3xl:h-[768px] bg-center xl:bg-left bg-no-repeat bg-cover finances_bg_img sm:h-[690px] h-[90vh]">
      <div className="max-w-[1120px] mx-auto h-full px-3 xl:px-0  flex-grow flex flex-col justify-center">
        <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[46px] md:leading-[65px] text-center lg:text-start max-w-[750px] mx-auto lg:mx-0 w-full ">
          Administer your finances, Expand your business
        </h1>
        <p className="text-md text-white sm:text-xl font-normal mt-[13px] mx-auto lg:mx-0  text-center lg:text-start max-w-[638px] w-full">
          Managing finances effectively to help retailers improve their
          financial performance and make better decisions to achieve robust
          growth.
        </p>
        <div className="flex justify-center lg:justify-start flex-col sm:flex-row  sm:mt-[28px]">
          <Link href="/resources/contact">
            <button className="mt-5 sm:mt-[0px] bg-greenlantern w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in ">
              Contact Sales
              <LeftArrow />
            </button>
          </Link>
          {/* <Link href="/pricing/Finance">
            <button className="mt-5 sm:mt-[0px] sm:ml-[22px] bg-greyshade1 w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in ">
              See Pricing
              <LeftArrow2 />
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
