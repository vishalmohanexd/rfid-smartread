import React from "react";
import { TickMark } from "./Icons";
import PremiumPlanHeading from "./PremiumPlanHeading";

const Premium = ({ plan }) => {
  return (
    <>
      <div className="h-[300px] ">
        <PremiumPlanHeading plan={plan} />
      </div>
      <div className="h-[46px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-medium bg-[#ECECEC]"></div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-b-[1px] border-r-[#101828]">
        <TickMark />
      </div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-b-[1px] border-r-[#101828]">
        <TickMark />
      </div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-b-[1px] border-r-[#101828]">
        {" "}
        <TickMark />
      </div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-b-[1px] border-r-[#101828]">
        <TickMark />
      </div>
      <div className="h-[46px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-medium bg-[#ECECEC]"></div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center ">
        <TickMark />
      </div>
    </>
  );
};

export default Premium;
