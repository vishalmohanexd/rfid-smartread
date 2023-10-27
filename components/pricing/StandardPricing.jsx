import React from "react";
import { TickMark } from "./Icons";
import StandardPlanHeading from "./StandardPlanHeading";

const StandardPricing = ({ plan }) => {
  return (
    <>
      {" "}
      <div className="h-[300px] border-r-[1px] border-[#101828]">
        <StandardPlanHeading plan={plan} />
      </div>
      <div className="h-[46px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-medium bg-[#ECECEC]"></div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-[1px] border-r-[#101828]">
        <TickMark />
      </div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-[1px] border-r-[#101828]">
        <TickMark />
      </div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-[1px] border-r-[#101828]">
        {" "}
        <TickMark />
      </div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-[1px] border-r-[#101828]"></div>
      <div className="h-[46px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-medium bg-[#ECECEC]"></div>
      <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[18px] items-center border-r-[1px] border-r-[#101828]">
        <TickMark />
      </div>
    </>
  );
};

export default StandardPricing;
