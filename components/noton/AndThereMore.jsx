import Image from "next/image";
import React from "react";
import { andThereMoreData4 } from "../common/Helper";
import { BarcodeScannerIcon } from "../common/Icons";

const AndThereMore = () => {
  return (
    <div className="lg:mb-[30px]">
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 sm:mt-[35px] md:mt-[50px] sm:mb-[35px] md:mb-[50px] ">
        <div className="flex flex-col lg:flex-row justify-between items-start">          
          <div className="max-w-[500px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full hidden lg:block">
            <Image
              src="/images/andmore.webp"
              width={623}
              height={725}
              alt="and there more img"
            />
          </div>
          <div className="max-w-[600px] mx-auto lg:mx-0 lg:max-w-[550px] w-full">
            <h2 className="sm:text-3xl text-xl md:text-9xl font-bold text-center lg:text-start sm:leading-[46px] leading-[40px] md:leading-[52px] text-darkBlack ">
            And Create!
            </h2>
            <p className="text-sm sm:text-[20px] text-center lg:text-start  font-normal sm:mt-[23px] text-lightgrey leading-[22px] sm:leading-[32px]">
            Create Your Custom App in Just a Few Clicks with CW Suite’s Composer
            </p>
            <div className="max-w-[650px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full  lg:hidden">
              <Image
                src="/images/and-there-more-img.png"
                width={623}
                height={750}
                alt="and there more img"
              />
            </div>

            <div>
              {andThereMoreData4.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start sm:flex-row sm:mt-[15px]"
                >
                  <div>
                    <span className="w-[64px] sm:mr-[20px] rounded-[50%] h-[64px] flex justify-center items-center bg-grey  ">
                      <img src={item.svg} alt={item.title} />
                    </span>
                  </div>
                  <div>
                    <p className=" text-md sm:text-[21px] sm:mt-0 text-center sm:text-start font-bold leading-[28px] text-backBlack">
                      {item.title}
                    </p>
                    <p className="text-[16px] text-center sm:text-start font-normal text-lightgrey mt-[5px]">
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
