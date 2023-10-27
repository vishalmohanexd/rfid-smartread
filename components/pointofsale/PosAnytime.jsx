import Image from "next/image";
import React from "react";

const PosAnytime = ({ data }) => {
  return (
    <div className="relative">
      <div className="container mx-auto px-3  py-12 lg:py-20">
        <div className="grid xl:grid-cols-2 gap-[25px] sm:mx-8 relative items-center">
          <div className="xl:max-w-[702px]">
            <div className="flex justify-center xl:justify-start">
              <h2 className="ff-Inter font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[54px] text-center xl:text-start max-w-[667px] ">
                {data.title}
              </h2>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="ff-inter font-normal text-center xl:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[22px]">
                {data.subtitle}
              </p>
            </div>
            <div className="max-w-[650px] mx-auto -right-32 xl:absolute 3xl:-mt-[50px] flex xl:hidden  sm:block justify-center xl:justify-start  ">
              <div className="">
                <Image
                  src={data.img}
                  width={1100}
                  height={813}
                  alt="Creating design img"
                />
              </div>
            </div>

            <div className="border-t-2 mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[48px] grid sm:grid-cols-2 gap-[15px] md:gap-[30px]">
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                      {data.tableTitles[0]}
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    {data.colSubtitles[0]}
                  </p>
                </div>
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                      {data.tableTitles[1]}
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base ">
                    {data.colSubtitles[1]}
                  </p>
                </div>
                <div className="mt-[15px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                      {data.tableTitles[2]}
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    {data.colSubtitles[2]}
                  </p>
                </div>
                <div className="mt-[15px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
                      {data.tableTitles[3]}
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    {data.colSubtitles[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[650px] mx-auto -right-32 xl:absolute 3xl:-mt-[50px] flex xl:block justify-center xl:justify-start">
            <div className="hidden sm:block">
              <Image
                src={data.img}
                width={1100}
                height={813}
                alt="Creating design img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosAnytime;
