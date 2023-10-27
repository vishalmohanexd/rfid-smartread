import Image from "next/image";
import React from "react";

const AdvancedAnalytics = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 mt-[40px] sm:mt-[70px] md:mt-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-[400px] mt-9 lg:mt-0 mx-auto lg:mx-0 xl:max-w-[550px] w-full relative hidden lg:block">
            <Image
              src="/images/seamless-retailintegration.webp"
              width={500}
              height={337}
              alt="advanced img"
            />
          </div>
          <div className="max-w-[480px] mx-auto lg:mx-0 lg:max-w-[550px] w-full">
            <div>
              <p className="text-xl sm:text-3xl md:text-9xl text-center lg:text-start font-bold text-darkBlack leading-[40px] sm:leading-[46px] md:leading-[72px]">
                Seamless Integration
              </p>
              <p className=" text-md sm:text-lg mt-[10px] sm:mt-[25px] text-center lg:text-start font-normal text-lightgrey ">
              Our apps are built to integrate smoothly with major platforms such
              as SAP, Salesforce, and Shopify, broadening your retail management
              capabilities
            </p>
            <div className="max-w-[400px] mt-9 lg:mt-0 mx-auto lg:mx-0 xl:max-w-[550px] w-full relative  lg:hidden">
            <Image
              src="/images/seamless-retailintegration.webp"
              width={500}
              height={337}
              alt="advanced img"
            />
          </div>
            <p className="text-sm mt-[10px] sm:mt-[25px] text-center lg:text-start font-bold text-darkBlack leading-[22px]">
              Enhanced Efficiency
            </p>
            <p className="text-sm sm:text-xs mt-2 font-normal text-lightgrey">
              Smooth integration enables retailers to streamline their
              operations by seamlessly sharing data and information between
              different apps eliminating manual processes and reducing errors
            </p>
            <p className="text-sm mt-[10px] sm:mt-[19px] text-center lg:text-start font-bold text-darkBlack leading-[22px]">
              Real-Time Data Syncing
            </p>
            <p className="text-sm sm:text-xs mt-2 font-normal text-lightgrey">
              Ensures that data is synchronized in real-time across different
              apps so retailers can have accurate and up-to-date information
              available across their entire system
            </p>
            <p className="text-sm text-center lg:text-start mt-[10px] sm:mt-[19px] font-bold text-darkBlack leading-[22px]">
              Expanded Functionality
            </p>
            <p className="text-sm sm:text-xs mt-2 font-normal text-lightgrey">
              Integration with other apps extends the functionality of the
              retail suite, providing access to additional features and
              capabilities that complement and enhance the overall retail
              operations
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
