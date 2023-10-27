import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";


import { LeftArrow, LeftArrow2 } from "../common/Icons";

const ProfessionalHero = () => {

  const router = useRouter()
  const seePricing = () =>{
    router.push('/resources/contact')
  }

  return (
    <div>
      <div className="container mx-auto px-3">
        <div className="flex justify-center">
          <h1 className="font-Inter text-darkBlack font-bold sm:mx-0 mx-[5px] leading-[42px] sm:leading-[50px] md:leading-[70px]  mt-[50px] sm:mt-[90px] max-w-[350px] sm:max-w-[800px]  text-center text-2xl md:text-[48px]">
          Power Up Your Business with Specialized Professional Services
          </h1>
        </div>
        <div className="flex justify-center mt-[17px] sm:mt-[28px] mb-[5px] sm:mb-[10px]">
          <p className="font-Inter font-normal text-sm sm:text-md max-w-[738px] text-center text-lightgrey ">
          Tailored solutions to unlock endless possibilities for Your Business with expert consultations and customization for Our Apps
          </p>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row mt-[16px]">
            <button onClick={seePricing} className="mt-5 sm:mt-[0px] bg-blue w-[240px] sm:w-[240px] h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg hover:shadow-lg">
              Get a Free Consult
              <LeftArrow />
            </button>
            <button onClick={seePricing} className="mt-5 sm:mt-[0px] sm:ml-[22px] bg-greyshade1 w-[240px] h-[45px] sm:h-[55px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg">
              Request a Quote
              <LeftArrow2 />
            </button>
        </div>
      </div>
      <Image
        className=" mt-[20px] sm:mt-[40px]"
        src="/images/profession-hero.webp"
        width={1920}
        height={561}
        alt="pos hero img"
      />
    </div>
  );
};

export default ProfessionalHero;
