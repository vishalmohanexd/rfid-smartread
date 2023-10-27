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
          <div className="lg:pr-2">
            <h2 className="text-xl  w-full sm:text-9xl font-bold text-center lg:text-start leading-[46px] mx-auto lg:mx-0 sm:leading-[60px] max-w-[487px] ">
              Why Choose Composer?
            </h2>
            <p className="max-w-[600px] lg:max-w-[400px] xl:max-w-[490px] mx-auto lg:mx-0 text-center lg:text-start mt-[15px] lg:mt-[15px] leading-[22px] sm:leading-[32px] font-normal text-sm  xl:text-md text-blueshade1 mb-2">
              In the dynamic world of retail, the ability to adapt quickly is
              paramount. That's why we created Composer - a revolutionary SaaS
              platform designed to help you create, customize, and manage your
              retail enterprise applications seamlessly and intuitively
            </p>
            <div class="request_demo w-full h-[150px] max-w-[379px] flex items-center justify-center relative bg-cover bg-center text-center rounded-lg">
              <h2 class="text-lg sm:text-2xl md:text-10xl leading-[28px] sm:leading-[42px] md:leading-[48px] text-[#fff] font-semibold">
               <Link href={'/resources/contact'}>Request Demo</Link> 

              </h2>
            </div>
          </div>
          <div className="max-w-[450px] xl:max-w-[500px] mx-auto lg:mx-0 mt-7 lg:mt-0  w-full relative">
            <Image
              className="z-1"
              src="/images/see-noton-action-img.png"
              width={802}
              height={653}
              alt="see noton img"
            />
            <div className="absolute top-0 right-0 max-w-[70px] sm:max-w-[100px] lg:max-w-[150px] ">
              <Image
                src="/images/see-noton-img-1.png"
                width={110}
                height={150}
                alt="see noton img"
              />
            </div>
            {/* <div className="absolute video_btn mt-5 lg:mt-0 flex justify-center sm:block left-[33%] lg:left-[-110px] xl:left-[-143px] bottom-[-70px] sm:bottom-[-23px] z-20">
              <SeeNotonActionModel />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeNotonAction;
