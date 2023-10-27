import React from "react";
import { ForwordIcon } from "./Icons";

const StandardPlanHeading = ({ plan }) => {
  return (
    <div className="flex flex-col justify-center">
      <button className="w-full h-[35px] bg-[#0072EF] text-white text-[14px] font-Inter font-medium">
        RECOMMENDED
      </button>
      <h3 className="text-center mt-[10px] text-[18px] font-medium ff-Inter">
        Standard
      </h3>
      <p className="px-5 text-center mt-[18px] text-[15px] ff-inter text-[#98A2B3]">
        All the basics for businesses that are just getting started.
      </p>
      <div className="flex justify-center mt-[15px]">
        <p className="ff-Inter  text-[35px] font-medium text-[#101828]">
          ${89 * plan}{" "}
        </p>{" "}
        <p className="mt-[20px] text-[#98A2B3] ff-inter">
          /{plan === 12 ? "Yearly" : "Annually"}{" "}
        </p>
      </div>
      <div className="px-5 mt-4">
        <button className="flex w-full trial-btn py-2 bg-[#101828] rounded-[6px] justify-center items-center">
          <span className="text-white ff-inter text-[15px] font-bold">
            Get Started
          </span>
          <span className="ml-1">
            <ForwordIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default StandardPlanHeading;
