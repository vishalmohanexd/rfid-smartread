import React from "react";
import { RotateArrowIcon } from "../../common/Icons";

const ProductTabs = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start justify-between mt-5 sm:mt-10">
                {" "}
                <div className="w-full xl:w-[48%]">
                    <h2 className="ff-inter font-bold text-xl sm:text-[32px] text-darkBlack leading-[28px] sm:leading-[36px] mx-auto lg:mx-0 text-center lg:text-start max-w-[667px] mb-4">
                        Efficient product management
                    </h2>

                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey mx-auto lg:mx-0  max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Create product lists with standard as well as custom fields. Option to import and export product lists to Csv and Excel formats
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey mx-auto lg:mx-0  max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Organize products by category to make it easier to find products, manage inventory, and analyze sales data
                    </div>
                    <div className="flex  ff-inter font-normal text-base sm:text-md text-lightgrey mx-auto lg:mx-0  max-w-[702px] mb-2">
                        <span className="mr-3">
                            <RotateArrowIcon />
                        </span>
                        Tool to easily import and export product categories
                    </div>
                </div>{" "}
                <div className="w-full mt-3 lg:mt-0 pl-2 xl:w-[48%] relative">
                    <img src="/images/product-tabs-img.webp" className="w-full" alt="frictionless" />
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;
