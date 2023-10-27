import React from "react";
import Enterprise from "./Enterprise";
import PlanHeading from "./PlanHeading";
import Premium from "./Premium";
import StandardPricing from "./StandardPricing";
import TrailRow from "./TrailRow";

const PlanPricing = ({ plan }) => {
  return (
    <div className="max-w-[1100px] px-2 justify-between overflow-auto xl:overflow-hidden  mt-10 flex mx-auto">
      <div className=" flex plan-box">
        <div className="w-[150px]">
          <PlanHeading />
        </div>
        <div className="w-[230px]">
          <TrailRow />
        </div>
        <div className="w-[215px] bg-[#F0F7FE]">
          <StandardPricing plan={plan} />
        </div>
        <div className="w-[230px]">
          <Premium plan={plan} />
        </div>
      </div>
      <div className="w-[230px] ml-2 xl:ml-0  plan-box ">
        <Enterprise plan={plan} />
      </div>
    </div>
  );
};

export default PlanPricing;
