import Link from "next/link";
import React from "react";
import { LeftArrow, LeftArrow2 } from "../common/Icons";

function HRPartners() {
  return (
    <>
      <div className="  ">
        <div className="mx-auto hr-hero-bg-img h-full max-w-[1600px] relative  after:absolute after:contents-[] after:w-full after:h-full after:bg-[#C6CDD1] after:left-0 after:top-0 after:z-[1] z-10  after:opacity-[0.5] xl:after:w-0">
          <div className="max-w-[1440px] mx-auto md:min-h-[650px] min-h-[600px]   w-full px-5 md:px-10 relative z-10">
            <h1 className="lg:text-4xl md:text-3xl text-2xl  font-bold my-8  pt-8 text-darkBlack text-center ">
              {" "}
              Your Strategic HR Partner
            </h1>
            <p className=" md:text-lg  text-sm   text-darkBlack  text-center">
              {" "}
              Effectively manage and utilize human resources. Recruit, hire,
              manage and ease the <br /> implementation of policies and procedures
              related to employee relations and behavior
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row mt-5  sm:mt-[55px]">
                <Link href="/resources/contact">
                <button className="mt-2 sm:mt-[0px] bg-[#0C173A]  sm:w-[190px] w-full   h-[60px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal transition-all duration-200 ease-in pl-1">
                  Contact Sales
                  <LeftArrow />
                </button>
              </Link>
              {/* <Link href="/pos-pricing">
                <button className="mt-5 sm:mt-[0px] sm:ml-[42px] bg-[#F2F4F7] sm:w-[170px] w-full   h-[60px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal transition-all duration-200 ease-in">
                  See Pricing
                  <LeftArrow2 />
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRPartners;
