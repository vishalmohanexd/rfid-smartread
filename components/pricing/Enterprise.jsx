import React from "react";
import EnterprisePlanHeading from "./EnterprisePlanHeading";

const Enterprise = ({ plan }) => {
  return (
    <div>
      <div className="h-[300px] ">
        <EnterprisePlanHeading plan={plan} />
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <p className="text-[18px] ff-Inter font-bold text-center px-4">
          Everything from the Premium plan
        </p>
        <p className="text-[18px] ff-Inter font-bold text-center px-4">+</p>
        <p className="text-[16px] ff-Inter px-4 text-center">
          Unlimited personal onboarding and launch services
        </p>
      </div>
    </div>
  );
};

export default Enterprise;
