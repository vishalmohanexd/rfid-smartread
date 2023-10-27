import Image from "next/image";
import React from "react";

const PosAnytime = () => {
  return (
    <div className="relative">
      <div className=" mx-auto px-3 mt-20" style={{maxWidth: "1300px"}}>
        <div className="grid xl:grid-cols-2 gap-[25px] sm:mx-8 relative ">
          <div className="xl:max-w-[702px]">
            <div className="flex justify-center xl:justify-start">
              <h2 className="ff-Inter font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[54px] text-center xl:text-start max-w-[667px] ">
                Packed with features
              </h2>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="ff-inter font-normal text-center xl:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[22px]">
                Process transactions, monitor inventory and buying trends, track
                pricing accuracy and collect marketing data with an interactive
                CW POS system
              </p>
            </div>
            <div className="max-w-[670px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full  lg:hidden">
            <img
              src="/images/posAnytime.webp"
              alt="and there more img"
              className="w-[900px] h-full"
            />
          </div>
            <div className="border-t-2 mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[48px] grid sm:grid-cols-2 gap-[15px] md:gap-[30px]">
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Real-time Inventory Tracking
                    </p>
                  </div>

                  <p className="font-normal mt-3 ff-inter text-base">
                    Quickly identify inventory shortages and surpluses and make
                    informed decisions
                  </p>
                </div>
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Advanced Analytics
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base ">
                    Analyze complex data sets and derive valuable insights by
                    employing advanced statistical models, data mining, etc.
                  </p>
                </div>
                <div className="mt-[15px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Finance Management
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    Enhance financial visibility and improve financial reporting
                    by managing revenue, cash and risk with real time data
                  </p>
                </div>
                <div className="mt-[15px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Seamless Order Management
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    Automate ordering process, making it more efficient and
                    reducing the potential for errors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[670px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full hidden lg:block">
            <img
              src="/images/posAnytime.webp"
              alt="and there more img"
              className="w-[900px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosAnytime;
