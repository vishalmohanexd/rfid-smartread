import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const InvoicingTabs = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start justify-between mt-5 sm:mt-10">
                {" "}
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack leading-[28px] sm:leading-[36px] text-center mx-auto lg:mx-0 lg:text-start max-w-[667px] mb-4">
                        Easier transactions with automated invoices
                    </h2>

                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Convert sales orders to sales invoices with just a click. Create quotations and convert quotations to proforma invoices for
                        confirmation
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Include payment terms, such as the due date for payment, and information on how the customer can pay, such as by check, credit
                        card, or bank transfer
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Real-time tracking of invoice status
                    </div>
                </div>{" "}
                <div className="w-full pl-2 mt-5 lg:mt-0 xl:w-[48%] relative">
                    <img src="/images/invoicing-tabs-img.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </div>
    );
};

export default InvoicingTabs;
