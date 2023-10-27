import Image from "next/image";
import React from "react";

const AlwaysOn = ({ data, img }) => {
  return (
    <div>
      <div className="container px-3 mx-auto py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-[25px] sm:gap-[50px] mx-[10px] lg:mx-[0px] xl:gap-[67px]">
          <div className="hidden lg:block">
            <Image
              src={data.img}
              width={750}
              height={744}
              alt="always img"
            />
          </div>
          <div>
            <div className="flex justify-center sm:justify-start">
              <button className="font-normal ff-Inter text-xs text-greenyellow bg-[#EFFEC7] rounded-[50px] h-[42px] w-[139px]">
                {data.button}
              </button>
            </div>
            <h2 className="font-bold ff-Inter mt-4 sm:mt-0 text-center sm:text-start text-xl sm:text-[48px] text-darkBlack">
              {data.title}
            </h2>
            <p className="font-normal ff-inter text-center sm:text-start text-lg  text-lightgrey max-w-[710px]">
              {data.subtitle}
            </p>
            <div className="lg:hidden mt-3">
              <Image
                src={data.img}
                width={750}
                height={744}
                alt="always img"
              />
            </div>
            <div className="mt-[20px] sm:mt-[48px] gap-[25px] sm:grid flex justify-center flex-col items-start sm:grid-cols-2">
              <div className="max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src={img}
                    alt="pos main icon"
                  />
                  <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                    {data.columns[0].title}
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
                  {data.columns[0].subtitle}
                </p>
              </div>
              <div className="max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src={img}
                    alt="pos main icon"
                  />
                  <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                    {data.columns[1].title}
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
                  {data.columns[1].subtitle}
                </p>
              </div>
              <div className=" sm:mt-3 max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src={img}
                    alt="pos main icon"
                  />
                  <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                    {data.columns[2].title}
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
                  {data.columns[2].subtitle}
                </p>
              </div>
              <div className=" sm:mt-3 max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src={img}
                    alt="pos main icon"
                  />
                  <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                    {data.columns[3].title}
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
                  {data.columns[3].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwaysOn;
