import Image from "next/image";
import React from "react";

const AssetManagement = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 sm:mt-[70px] mt-[40px] md:mt-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-[500px] mt-9 lg:mt-0 lg:pr-2 xl:pr-0 w-full">
            <Image
              src="/images/implemetationss.png"
              width={620}
              height={627}
              style={{borderRadius:'8px'}}
              alt="implemetation"
            />
          </div>
          <div className="max-w-[500px]  -order-1 lg:order-2  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[53px] text-center lg:text-start max-w-[667px] ">
              Implementation
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[17px]">
              By choosing CW Suite for your app implementation, you can be confident in a seamless transition, a robust data migration process, and ongoing support to keep your app running smoothly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;
