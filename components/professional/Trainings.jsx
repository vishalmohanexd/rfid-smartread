import Image from "next/image";
import React from "react";

const Trainings = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 sm:mt-[70px] mt-[40px] md:mt-[100px] mb-[60px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-[500px] mt-9 lg:mt-0 lg:pr-2 xl:pr-0 w-full">
            <Image
              src="/images/training1.png"
              width={620}
              height={627}
              alt="training"
            />
          </div>
          <div className="max-w-[500px]  -order-1 lg:order-2  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[53px] text-center lg:text-start max-w-[667px] ">
              Trainings
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[17px]">
              Our goal is to provide comprehensive training that equips users with the knowledge and skills to confidently navigate and utilize our apps to leverage their full potential              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
