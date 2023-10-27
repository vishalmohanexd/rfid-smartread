import Image from "next/image";
import React from "react";
import { andThereMoreData2, andThereMoreData3 } from "../common/Helper";
import { BarcodeScannerIcon } from "../common/Icons";

const AndThereMore = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 sm:mt-[70px] mt-[40px] mb-[60px] md:mt-[100px] ">
        <h2 className="sm:text-3xl text-xl md:text-9xl font-bold text-center lg:text-start sm:leading-[46px] leading-[40px] md:leading-[52px] text-darkBlack ">
          And there’s More!
        </h2>
        <p className="text-sm sm:text-lg text-center lg:text-start  font-normal sm:mt-[23px] mt-[15px] text-lightgrey leading-[22px] sm:leading-[32px]">
          Checkout several other features that can help businesses to optimize
          inventory operations
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="max-w-[600px] mx-auto lg:mx-0 lg:max-w-[550px] w-full">
            <div>
              {andThereMoreData2.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start sm:flex-row mt-[20px] sm:mt-[30px]"
                >
                  <div>
                    <span className="w-[64px] sm:mr-[20px] rounded-[50%] h-[64px] flex justify-center items-center bg-grey  ">
                      <img src={item.svg} alt={item.title} />
                    </span>
                  </div>
                  <div>
                    <p className=" text-md sm:text-xl mt-3 sm:mt-0 text-center sm:text-start font-bold leading-[28px] text-backBlack">
                      {item.title}
                    </p>
                    <p className="text-sm text-center sm:text-start font-normal text-lightgrey mt-[14px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[600px] mx-auto lg:mx-0 lg:max-w-[550px] w-full">
            <div>
              {andThereMoreData3.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start sm:flex-row mt-[20px] sm:mt-[30px]"
                >
                  <div>
                    <span className="w-[64px] sm:mr-[20px] rounded-[50%] h-[64px] flex justify-center items-center bg-grey  ">
                      <img src={item.svg} alt={item.title} />
                    </span>
                  </div>
                  <div>
                    <p className=" text-md sm:text-xl mt-3 sm:mt-0 text-center sm:text-start font-bold leading-[28px] text-backBlack">
                      {item.title}
                    </p>
                    <p className="text-sm text-center sm:text-start font-normal text-lightgrey mt-[14px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndThereMore;
