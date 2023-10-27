import Image from "next/image";
import React from "react";
import { managementData2 } from "../common/Helper";

const Management = () => {
  return (
    <section className="lg:mt-[120px]">
      <div className="container mx-auto z-0 px-3  bg-skyblue rounded-[58px] relative">
        <div className="absolute top-0 left-[-43px] z-[-1]">
          <Image
            src="/images/management-2.png"
            width={162}
            height={162}
            alt="management img"
          />
        </div>
        <h2 className="font-bold leading-[30px] sm:leading-[39px] md:leading-[64px] z-50 mx-4 pt-[20px] sm:pt-[40px] md:pt-[50] 3xl:pt-[91px] ff-Inter sm:text-3xl text-xl md:text-[48px] text-darkBlack text-center">
          Kitchen Display System
        </h2>
        <div className="border-t-2 mt-[15px] ml-[200px] border-dashed xl:max-w-[702px] border-#006D77"></div>
        <div className="flex z-50 justify-center mt-[12px] sm:mt-[15px] 3xl:mt-[23px] mx-4">
          <p className="font-normal ff-inter text-sm sm:text-md text-lightgrey max-w-[1080px] text-center">
            Elevate your kitchen operations to new heights with our
            state-of-the-art digital display system, meticulously designed to
            streamline order management and enhance communication, resulting in
            unparalleled efficiency in food preparation. Experience the future
            of kitchen management with our innovative solution.
          </p>
        </div>
        <div className="flex z-50 justify-center mt-[10px] px-4 pb-[20px] sm-pb-[40px] 3xl:pb-[43px]">
          <div className="grid sm:grid-cols-2 items-center md:grid-cols-3 gap-[20px] sm:gap-[20px] xl:gap-[59px] mx-[10px] max-w-[1150px]">
            <div className=" z-50 w-[100%] h-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
              <div className="max-w-[100%] mx-auto">
                <Image
                  src="/images/kitchen-2.webp"
                  width={300}
                  height={522}
                  alt="Management img"
                />
              </div>
              <div className="flex items-center">
                <Image
                  className="max-w-[27px]"
                  src="/images/svg/round-logo.svg"
                  width={27}
                  height={17}
                  alt="logo"
                />
                <h5 className="ml-2 ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px] lg:text-[22px] text-darkBlack">
                  {/* {item.title} */}
                  Product management
                </h5>
              </div>

              <div className="flex justify-start mt-[5px] sm:mt-2]">
                <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[284px]">
                  {/* {item.description} */}
                  Create categories, product variants and SKUs for better control over your stock
                </p>
              </div>
            </div>
            <div className=" z-50 w-[100%] h-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
              <div className="max-w-[100%] mx-auto">
                <img
                  src="/images/kitechen-1.webp"
                  style={{height:"262px",width:"260px"}}
                  alt="Management img"
                />
              </div>
              <div className="flex items-center">
                <Image
                  className="max-w-[27px]"
                  src="/images/svg/round-logo.svg"
                  width={27}
                  height={17}
                  alt="logo"
                />
                <h5 className="ml-2 mt-2 ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px] lg:text-[22px] text-darkBlack">
                 
                  Reorder points
                </h5>
              </div>

              <div className="flex justify-start mt-[5px] sm:mt-2]">
                <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[254px]">
                  {/* {item.description} */}
                  Set reorder points and low-stock alerts to minimize out-of-stock
                </p>
              </div>
            </div>
            <div className=" z-50 w-[100%] h-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
              <div className="max-w-[100%] mx-auto">
                <Image
                  src="/images/kitchen-3.webp"
                  width={267}
                  height={267}
                  alt="Management img"
                />
              </div>
              <div className="flex items-center">
                <Image
                  className="max-w-[27px]"
                  src="/images/svg/round-logo.svg"
                  width={27}
                  height={17}
                  alt="logo"
                />
                <h5 className="ml-2 mt-8 ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px] lg:text-[22px] text-darkBlack">
                  {/* {item.title} */}
                  Easy Integrations
                </h5>
              </div>

              <div className="flex justify-start mt-[5px] sm:mt-2]">
                <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[254px]">
                  {/* {item.description} */}
                  Easily integrate with other apps in Suite as your business grows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
