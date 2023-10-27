import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const PoManagementTab = () => {
    return (
        <div className="flex flex-col xl:flex-row items-start justify-between mt-6 sm:mt-10">
            <div className="w-full xl:w-[48%]">
                <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack sm:leading-[46px]  md:leading-[54px] text-center xl:text-start max-w-[667px] mb-4">
                    Efficiently manage your purchase orders
                </h2>

                <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                    <span className="mr-3">
                        <RotateArrowIcon />
                    </span>
                    Automatic Purchase Order generation with fluid forms and approvals on the go
                </div>
                <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                    <span className="mr-3">
                        <RotateArrowIcon />
                    </span>
                    Flexible PO processing, order monitoring and transaction history of vendor pricing
                </div>
                <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                    <span className="mr-3">
                        <RotateArrowIcon />
                    </span>
                    Workflow for locations, departments with custom fields
                </div>
                <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                    <span className="mr-3">
                        <RotateArrowIcon />
                    </span>
                    Improve policy compliance; real-time spend insights; smart alerts; dynamic routing
                </div>
                <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                    <span className="mr-3">
                        <RotateArrowIcon />
                    </span>
                    Raise multi-vendor purchase orders with one click
                </div>
            </div>{" "}
            <div className="w-full xl:w-[48%] relative mt-6 xl:mt-0">
                <img src="/images/frictionless-purchasing-img.webp" className="w-full" alt="frictionless" />
            </div>
        </div>
    );
};

export default PoManagementTab;
