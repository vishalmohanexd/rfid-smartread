import Link from "next/link";
import React from "react";
import {
  CardIcon,
  LeftArrow,
  LeftArrow2,
  PenIcon,
  SmileIcon,
} from "../common/Icons";

const Pricing = () => {
  return (
   
    <section>
      <div className="">
        
        <div className="bg-bottom bg-blue bg-no-repeat mt-20">
        <div className="max-w-[1120px] mx-auto px-3 lg:px-0">
          <div className="flex justify-center items-center flex-col h-auto pb-16">
            <h2 className="text-2xl mt-[80px] sm:text-3xl md:text-3xl leading-[40px] sm:leading-[46px] md:leading-[58px] text-center font-bold text-white">
              Ready to revolutionize your retail operations?
            </h2>
            <p className="text-sm sm:text-md md:text-lg font-normal pt-[15px] sm:pt-[38px] max-w-[1046px] text-white text-center">
              Discover how CW Suite provides a cohesive, efficient, and
              future-proof solution for retailers
            </p>
            <div className="flex justify-center flex-col sm:flex-row w-full mt-[65px]">
              <Link href="/pricing">
                <p className="mt-5 sm:mt-0 bg-greenlantern w-full sm:w-[218px] h-[45px] sm:h-[55px] justify-center rounded-full text-white text-sm flex items-center free-trial-btn-hover font-normal transition-all duration-200 ease-in hover:shadow-lg">
                  Get Started
                  <LeftArrow />
                </p>
              </Link>
              <Link href="/resources/contact">
                <p className="mt-5 sm:mt-0 sm:ml-[22px] bg-white w-full sm:w-[218px] h-[45px] sm:h-[55px] justify-center rounded-full text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal transition-all duration-200 ease-in hover:shadow-lg">
                  Request a Demo
                  <LeftArrow2 />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    
  );
};

export default Pricing;
