import Image from "next/image";
import React from "react";

const InvoicingPricing = () => {
    return (
        <div>
            <div className="max-w-[1120px] mx-auto px-3 xl:px-0 md:mt-[100px] sm:mt-[30px] mt-[30px] lg:mt-[30px]">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="lg:max-w-[550px]  w-full">
                        <div className="flex justify-center lg:justify-start">
                            <h2 className=" font-bold md:text-9xl text-xl sm:text-2xl text-darkBlack leading-[28px] sm:leading-[40px] md:leading-[64px] text-center lg:text-start max-w-[667px] ">
                            Configurations
                            </h2>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[15px]">
                            Our collaborative configuration process allows us to customize the app to align with your business goals and workflows, providing a tailored solution that meets your precise needs
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
                        <Image style={{borderRadius:'8px'}} src="/images/configurations.png" width={735} height={190} alt="invoicing pricing img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicingPricing;
