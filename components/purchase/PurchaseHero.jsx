import Link from "next/link";
import React from "react";
import { LeftArrow, LeftArrow2 } from "../common/Icons";


const PurchaseHero = () => {
  return (
    <>
      <div className="purchase-bg w-full h-screen sm:h-[690px] bg-cover bg-no-repeat flex flex-col 3xl:h-[768px]">
        <div className="max-w-[1120px] mx-auto px-3 xl:px-0 w-full flex-grow flex flex-col justify-center">
          <h1
            className="text-[36px] sm:text-[54px] text-darkBlack leading-[50px] sm:leading-normal font-bold max-w-[790px]
          "
          >
            Revolutionize your purchase strategy
          </h1>
          <p className="text-darkBlack text-base sm:text-lg font-normal my-2 sm:my-4 max-w-xl">
            Automated process, improved vendor management, better budget
            tracking, ensured compliance with policies, easy integration and 
            detailed analytics
          </p>{" "}
          <div className="flex flex-col sm:flex-row sm:mt-6">
            <Link href="pricing/Purchase">
              <button className="mt-5 sm:mt-[0px] bg-blue w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in">
                Sign Up
                <LeftArrow />
              </button>
            </Link>
            <Link href="/apps/pricing/Purchase">
              <button className="mt-5 sm:mt-[0px] sm:ml-[22px] bg-greyshade1 w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in">
                See Pricing
                <LeftArrow2 />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHero;
