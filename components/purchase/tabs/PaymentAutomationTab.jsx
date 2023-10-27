import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const PaymentAutomationTab = () => {
    return (
        <>
            <div className="flex flex-col xl:flex-row items-start justify-between mt-6 sm:mt-10">
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack sm:leading-[46px] md:leading-[54px] text-center xl:text-start max-w-[667px] mb-4">
                        Eliminate payment errors and improve accuracy
                    </h2>

                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Real-time payments to numerous invoices in seconds
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Instant notification for all payment dues
                    </div>
                    <div className="flex ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Partial payment, multi-payment methods for invoices
                    </div>
                </div>{" "}
                <div className="w-full xl:w-[48%] relative mt-6 xl:mt-0">
                    <img src="/images/Payment-automation.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </>
    );
};

export default PaymentAutomationTab;
