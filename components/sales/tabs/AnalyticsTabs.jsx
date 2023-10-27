import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const AnalyticsTabs = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start justify-between mt-5 sm:mt-10">
                {" "}
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack leading-[28px] sm:leading-[36px] text-center mx-auto lg:mx-0 lg:text-start max-w-[667px] mb-4">
                        Detailed insights into your sales
                    </h2>

                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Forecast sales trends and patterns, to plan for future demand and make adjustments
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Track and measure the performance of individual sales reps, teams, and regions
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Check the progress of leads and deals through the sales pipeline
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Analyze customer data and product performance to improve sales strategy, increase efficiency, and boost productivity
                    </div>
                </div>{" "}
                <div className="w-full pl-2 mt-5 lg:mt-0 xl:w-[48%] relative">
                    <img src="/images/analytics-tabs-img.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </div>
    );
};

export default AnalyticsTabs;
