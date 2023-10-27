import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const VendorManagement = () => {
    return (
        <>
            <div className="flex flex-col xl:flex-row items-start justify-between mt-6 sm:mt-10">
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack sm:leading-[46px]  md:leading-[54px] text-center xl:text-start max-w-[667px] mb-4">
                        Effective quotes for efficient business
                    </h2>

                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Maintain vendor scorecards with performance tracker
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Real-time visibility of vendor cycle
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Centralized repository
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Vendor rating based on policy compliance, delivery quality and timelines
                    </div>
                </div>{" "}
                <div className="w-full xl:w-[48%] relative mt-6 xl:mt-0">
                    <img src="/images/vendor-management.webp" className="w-full" alt="vendor-management" />
                </div>
            </div>
        </>
    );
};

export default VendorManagement;
