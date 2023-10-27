import React from "react";
import { RotateArrowIcon } from "../common/Icons";

const CustomerAccounts = () => {
  return (
    <div className="max-w-[1120px] mx-auto px-3 xl:px-0 w-full justify-between flex flex-col lg:flex-row items-start py-16 xl:py-28 relative">
      {/* <div className="w-full max-w-[550px] mx-auto lg:mx-0 lg:pr-5 xl:pr-0 ">
                <img src="/images/customer-accounts-img.png" className="max-w-[700px]  w-full" alt="erfx" />
            </div> */}
      <div class="hidden lg:block w-full max-w-[550px] mx-auto lg:mx-0 lg:pr-5 xl:pr-0">
        <img
          src="/images/customer-accounts-img.png"
          class="max-w-[700px] w-full"
          alt="erfx"
        />
      </div>

      <div className="w-full max-w-[550px] mx-auto lg:mx-0 mt-3 sm:mt-5 lg:mt-0">
        <h2 className="ff-inter font-bold sm:text-3xl text-xl text-darkBlack leading-[28px] md:leading-[54px] text-center lg:text-start max-w-[667px] ">
          Customer Accounts
        </h2>
        <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-4">
          Elevate your customers experiences, increase retention, and drive
          revenue with our comprehensive customer management solutions
        </p>

        <div class=" lg:hidden mt-4 w-full max-w-[550px] mx-auto lg:mx-0 lg:pr-5 xl:pr-0">
          <img
            src="/images/customer-accounts-img.png"
            class="max-w-[700px] w-full"
            alt="erfx"
          />
        </div>

        <div className="border-t-2 border-dashed xl:max-w-[702px] border-#006D77 my-6"></div>

        <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
          <span className="mr-3">
            <RotateArrowIcon />
          </span>
          Create, manage, import and export customer accounts with ease
        </div>
        <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
          <span className="mr-3">
            <RotateArrowIcon />
          </span>
          Add custom fields to customer registration as per business requirement
        </div>
        <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
          <span className="mr-3">
            <RotateArrowIcon />
          </span>
          Add custom fields to customer registration as per business requirement
        </div>
        <div className="flex sm:items-center ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
          <span className="mr-3">
            <RotateArrowIcon />
          </span>
          Automate customer service and support, and also integrate with other
          tools like inventory, and shipping
        </div>
      </div>
    </div>
  );
};

export default CustomerAccounts;
