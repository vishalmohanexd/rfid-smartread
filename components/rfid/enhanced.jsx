import Image from "next/image";
import React from "react";

const Enhanced = () => {
  return (
    <div className="container mx-auto mt-16 sm:mt-[80px] 3xl:mt-[89px]">
      <h2 className="font-Inter font-bold text-xl sm:text-3xl text-[#101828] text-center leading-[47px] sm:leading-normal">
        RFID-Enhanced Retail Solutions
      </h2>
      <div className="justify-center flex mt-3  sm:mx-0">
        <p className="font-inter font-normal text-[18px] sm:text-[18px] xl:text-[18px]  text-center text-[#475467]">
          Introducing a range of innovative RFID-powered solutions to “Elevate
          Every Shopping Experience” <br /> From optimizing checkout procedures to
          fortifying security measures, each product is tailored to elevate your
          retail environment
        </p>
      </div>
    </div>
  );
};

export default Enhanced;
