import React from "react";
import { RotateArrowIcon } from "../common/Icons";

const ERFx = () => {
  return (
    <>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 w-full justify-between flex flex-col xl:flex-row items-center py-16 xl:py-28 relative">
        <img
          src="/images/approvals-erfx.png"
          className="sm:absolute max-w-[240px] left-[115px] xl:-left-[100px] top-[20px] w-full z-10 hidden lg:block"
          alt="erfx"
        />
        <div className="w-full xl:w-1/2 relative">
          <img
            src="/images/erfx-image.png"
            className="xl:absolute mx-auto xl:mx-0 max-w-[442px] xl:top-[-180px] w-full hidden lg:block"
            alt="erfx"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-6 sm:mt-0">
          <h2 className="ff-inter font-bold sm:text-4xl text-[30px] text-darkBlack leading-[46px] md:leading-[54px] text-center xl:text-start max-w-[667px] ">
            ERFx
          </h2>
          <p className="ff-inter font-normal text-center xl:text-start text-base sm:text-md text-lightgrey max-w-[702px] mt-2 sm:mt-4">
            Automate the request and purchasing process, making it more
            efficient and reducing the potential for errors.
          </p>

          <img
          src="/images/approvals-erfx.png"
          className="sm:absolute max-w-[240px] left-[115px] xl:-left-[100px] top-[20px] w-full z-10  lg:hidden"
          alt="erfx"
        />
        <div className="w-full xl:w-1/2 relative">
          <img
            src="/images/erfx-image.png"
            className="xl:absolute mx-auto xl:mx-0 max-w-[442px] xl:top-[-180px] w-full  lg:hidden"
            alt="erfx"
          />
        </div>
          <div className="border-t-2 border-dashed xl:max-w-[702px] border-#006D77 my-6"></div>

          <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
            <span className="mr-3">
              <RotateArrowIcon />
            </span>
            Initiate real-time events and add internal evaluators
          </div>
          <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
            <span className="mr-3">
              <RotateArrowIcon />
            </span>
            Enable approval workflows
          </div>
          <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
            <span className="mr-3">
              <RotateArrowIcon />
            </span>
            Workflow for locations, departments with custom fields
          </div>
          <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
            <span className="mr-3">
              <RotateArrowIcon />
            </span>
            Approval threshold and policies
          </div>
          <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
            <span className="mr-3">
              <RotateArrowIcon />
            </span>
            Mobile ready approvals
          </div>
        </div>
      </div>
    </>
  );
};

export default ERFx;
