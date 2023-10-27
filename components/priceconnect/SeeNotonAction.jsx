import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LeftArrow, VideoIcon } from "../common/Icons";
import SeeNotonActionModel from "../model/SeeNotonActionModel";

const SeeNotonAction = () => {
  return (
    <div>
      <div className="max-w-[1120px] pb-10 mx-auto mt-[40px] sm:mt-[70px] md:mt-[111px] px-3 2xl:px-0 ">
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="flex-1 xl:max-w-[100%] ">
            <h2 className="text-xl  w-full sm:text-9xl font-bold text-center lg:text-start leading-[46px] mx-auto lg:mx-0 sm:leading-[60px] max-w-[487px] ">
            Price Connect in action!
            </h2>
            <p className="max-w-[600px] lg:max-w-[400px] xl:max-w-[90%] mx-auto lg:mx-0 text-center lg:text-start mt-[15px] lg:mt-[15px] leading-[22px] sm:leading-[32px] font-normal text-sm  xl:text-md text-blueshade1 mb-6">
            Experience Price Connect  in action. Contact us today for a personalized demonstration and discover how Price Connect  can revolutionize your pricing strategy
            </p>
            <div class="request_demo w-full h-[100px] max-w-[379px] flex items-center justify-center relative bg-cover bg-center text-center rounded-lg mt-2 mb-4">
              <h2 class="text-lg sm:text-2xl md:text-10xl leading-[28px] sm:leading-[42px] md:leading-[48px] text-[#fff] font-semibold">
               <Link href={'/resources/contact'}>Request Demo</Link> 

              </h2>
            </div>
          </div>
          <div className="flex-1 max-w-[450px] xl:max-w-[100%]">
            <Image
              className="z-1"
              src="/images/connect-price.webp"
              width={802}
              height={653}
              alt="see noton img"
            />
            {/* <div className="absolute top-0 right-0 max-w-[70px] sm:max-w-[100px] lg:max-w-[150px] ">
              <Image
                src="/images/connect-price.webp"
                width={110}
                height={150}
                alt="see noton img"
              />
            </div>            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeNotonAction;
