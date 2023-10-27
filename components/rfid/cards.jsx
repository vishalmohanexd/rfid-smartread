import Image from "next/image";
import React from "react";

const RfidCards = ({ heroData, data }) => {
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="flex justify-center">
          <h1 className="font-Inter text-[#101828] font-bold sm:mx-0 mx-[5px] leading-[42px] sm:leading-[50px] md:leading-[70px]  mt-[50px] sm:mt-[90px] max-w-[350px] sm:max-w-[794px]  text-center text-2xl md:text-[48px]">
            {heroData.title}
          </h1>
        </div>
        <div className="flex justify-center mt-[17px] sm:mt-[34px]">
          <p className="font-Inter font-normal text-sm sm:text-md max-w-[755px] text-center text-lightgrey mb-2">
            {heroData.description}
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="md:col-span-1 p-4 flex flex-col items-center bg-gray-200"
            >
              <Image className="mb-2" src={item.image} height={60} width={60} />
              <div className="text-center font-semibold h-12">{item.title}</div>
              <div className="text-center lg:h-28 md:h-44">
                {item.description}
              </div>
              <button className="text-[13px] mt-2">{item.button}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RfidCards;
