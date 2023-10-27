import Image from "next/image";
import React from "react";

const AdvancedAnalytics = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 mt-[40px] sm:mt-[70px] md:mt-[100px] ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="max-w-[480px] mt-9 lg:mt-0 mx-auto lg:mx-0 xl:max-w-[550px] w-full relative hidden lg:block">
            <Image
              src="/images/advanced-img-1.png"
              width={637}
              height={738}
              alt="advanced img"
            />
            <Image
              className="absolute hidden sm:block rounded-[16px] shadow-[0px_30px_120px_rgba(0,0,0,0.1)] bottom-0 right-[-60px] lg:right-[-20px] xl:right-[-70px] "
              src="/images/advanced-img-2.png"
              width={219}
              height={259}
              alt="advanced img"
            />
          </div>
          <div className=" max-w-[550px] -order-1 lg:order-2 mx-auto lg:mx-0 lg:max-w-[480px] w-full">
            <h2 className=" text-xl sm:text-3xl  md:text-9xl text-center lg:text-start font-bold text-darkBlack leading-[40px] sm:leading-[46px] md:leading-[72px]">
              Advanced analytics
            </h2>
            <p className=" text-md sm:text-lg mt-[15px] sm:mt-[25px] text-center lg:text-start font-normal text-lightgrey ">
              View and analyze inventory data with a variety of reports to make
              better decisions about inventory management
            </p>

            <div className="max-w-[480px] mt-9 mx-auto lg:mx-0 lg:hidden">
              <Image
                src="/images/advanced-img-1.png"
                width={637}
                height={738}
                alt="advanced img"
              />
              <Image
                className="absolute hidden sm:block rounded-[16px] shadow-[0px_30px_120px_rgba(0,0,0,0.1)] bottom-0 right-[-60px] lg:right-[-20px] xl:right-[-70px]"
                src="/images/advanced-img-2.png"
                width={219}
                height={259}
                alt="advanced img"
              />
            </div>

            <p className="text-sm mt-[18px] sm:mt-[25px] text-center lg:text-start font-bold text-darkBlack leading-[22px]">
              Stock Movement Report
            </p>
            <p className="text-base sm:text-sm mt-2 text-center lg:text-start font-normal text-lightgrey  ">
              Analyze the flow of stock in and out of the warehouse over a given
              period of time. Also shows information such as the location of the
              stock, the quantity of stock moved, and the reason for the stock
              movement
            </p>
            <p className="text-sm mt-[18px] sm:mt-[19px] text-center lg:text-start font-bold text-darkBlack leading-[22px]">
              Stock Aging Report
            </p>
            <p className="text-base sm:text-sm mt-2 text-center lg:text-start font-normal text-lightgrey  ">
              Shows the age of the stock, which can help businesses to identify
              slow-moving or obsolete products
            </p>
            <p className="text-sm text-center lg:text-start mt-[18px] sm:mt-[19px] font-bold text-darkBlack leading-[22px]">
              Custom Reports
            </p>
            <p className="text-base sm:text-sm text-center lg:text-start mt-2 font-normal text-lightgrey  ">
              Create reports tailored to specific business needs or requirements
              with report builder. Can be saved and exported in various formats
              such as PDF, Excel, and CSV
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
