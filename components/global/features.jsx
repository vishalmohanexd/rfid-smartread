import Image from "next/image";
import React from "react";

const GlobalFeatures = ({ data }) => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 md:mt-[100px] sm:mt-[70px] mt-[20px] lg:mt-[60px]">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:max-w-[550px]  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className=" font-bold md:text-[34px] text-xl sm:text-2xl text-darkBlack leading-[28px] sm:leading-[40px] md:leading-[38px] text-center lg:text-start max-w-[667px] ">
                {data.title}
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[15px]">
                {data.subtitle}
              </p>
            </div>
            <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
              <div className="block lg:hidden">
                <Image
                  src={data.img}
                  width={735}
                  height={660}
                  alt="invoicing pricing img"
                />
              </div>
            </div>

            <div className="border-t-2 mt-[15px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[10px] mt-[15px] grid sm:grid-cols-2 gap-[10px] xl:gap-[15px]">
                <div className=" mt-[10px] sm:mt-0 max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      {data.tableTitles[0]}
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    {data.colSubtitles[0]}
                  </p>
                </div>
                <div className="max-w-[325px] mt-[15px] sm:mt-0">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      {data.tableTitles[1]}
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey ">
                    {data.colSubtitles[1]}
                  </p>
                </div>
                <div className="mt-[15px] max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      {data.tableTitles[2]}
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    {data.colSubtitles[2]}
                  </p>
                </div>
                <div className="mt-[15px] max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src={data.imgIcon}
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      {data.tableTitles[3]}
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    {data.colSubtitles[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[550px]  w-full">
            <div className="hidden lg:flex justify-center">
              <Image
                src={data.img}
                width={735}
                height={660}
                alt="invoicing pricing img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeatures;
