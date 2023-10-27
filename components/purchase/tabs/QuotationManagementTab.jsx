import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const QuotationManagementTab = () => {
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
                        Set up quotation workflows
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Get quotation requests from multiple vendors in seconds
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Easily compare quotations
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Real-time tracking of quotation status
                    </div>
                </div>
                <div className="w-full xl:w-[48%] relative mt-6 xl:mt-0">
                    <img src="/images/Quotation-Management-img.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </>
    );
};

export default QuotationManagementTab;
