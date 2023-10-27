import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const ReturnsTabs = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start justify-between mt-5 sm:mt-10">
                {" "}
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack leading-[28px] sm:leading-[36px] text-center mx-auto lg:mx-0 lg:text-start max-w-[667px] mb-4">
                        Returns made simple
                    </h2>

                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Initiate return process and create return receipts
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Define return policies, and streamline process of return. Create credit notes and other ways of returns
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Manage the inventory of returned goods, and the associated financial transactions
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Identify and address the root cause of returns in order to reduce the number of returns in the future
                    </div>
                </div>{" "}
                <div className="w-full pl-2 mt-5 lg:mt-0 xl:w-[48%] relative">
                    <img src="/images/return-tab-img.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </div>
    );
};

export default ReturnsTabs;
