import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const ShipmentTabs = () => {
    return (
        <div>
            <div className="flex flex-col xl:flex-row items-start justify-between mt-5 sm:mt-10">
                {" "}
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack leading-[28px] sm:leading-[36px] text-center mx-auto lg:mx-0 lg:text-start max-w-[667px] mb-4">
                        Optimize goods movement
                    </h2>

                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Create shipment orders with custom fields
                    </div>

                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Convert shipment orders to invoices and add shipping charges
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey max-w-[702px] mx-auto lg:mx-0 mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Track the location of shipments, and ensure that the goods are delivered on time and in good condition
                    </div>
                </div>{" "}
                <div className="w-full pl-2 mt-5 lg:mt-0 xl:w-[48%] relative">
                    <img src="/images/shipment-tabs-img.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </div>
    );
};

export default ShipmentTabs;
