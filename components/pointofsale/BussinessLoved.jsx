import Image from "next/image";
import React from "react";
// import { bussiness } from "../common/Helper";
const BussinessLoved = ({data,bussiness}) => {
  return (
    <div>
      <div className="container mx-auto mt-16 sm:mt-[80px] px-3 ">
        <h2 className="ff-Inter font-bold sm:text-3xl text-xl leading-[35px] sm:leading-[65px] md:text-[48px] text-darkBlack text-center">
          {/* Trusted and loved by over 2000 businesses */}
          {data.title}
        </h2>
        <p className="ff-inter font-normal mt-[14px] text-md text-center text-lightgrey">
          {/* Don’t take our word for it. Check out what our users say */}
          {data.subtitle}
        </p>
        <div className="flex xl:flex-row flex-col justify-between  mt-[20px] 3xl:mt-[37px]">
          <div className="xl:w-[60%] 3xl:w-[80%] 3xl:max-w-[906px]">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Image
                // src="/images/bussiness-img-1.png"
                src={data.images.img1}
                width={310}
                height={280}
                alt="bussiness img"
              />
              <Image
                className="mt-5 hidden sm:block  lg:mt-0 lg:ml-[30px]"
                // src="/images/bussiness-img-2.png"
                src={data.images.img2}
                width={310}
                height={280}
                alt="bussiness img"
              />
            </div>
            <div>
              <h4 className="ff-Inter font-bold leading-[30px] sm:leading-0 text-lg sm:text-xl  mt-[17px] text-darkBlack">
                {/* CW POS integrates seamlessly with all your favorite tools */}
                {data.images.imgdes}
              </h4>
              <p className="ff-inter font-normal mt-[8px] text-base max-w-[946px] text-lightgrey">
                {/* With CW POS, we were able to increase our sales by 8% within the
                first 2 months and can see opportunities for better speed and
                stability. */}
                {data.images.imgsubdes}
              </p>
            </div>
            <div className="flex  items-center mt-4">
              <Image
                // src="/images/bussiness-img-3.png"
                src={data.profile.img}
                width={55}
                height={56}
                alt="bussiness img"
              />
              <div className="pl-[15px]">
                <h6 className="ff-Inter font-normal text-sm text-darkBlack">
                  {/* Joshua Wilson */}
                  {data.profile.name}
                </h6>
                <p className="ff-inter font-bold text-[12px] text-blueshade1">
                  {/* COO, Trendy Casuals */}
                  {data.profile.description}
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[35%]">
            {bussiness.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mt-[20px] lg:mt-[0px]">
                  <div className="mr-2">
                    <h6 className="ff-Inter font-semibold sm:mt-4 text-base max-w-[289px]">
                      {item.header}
                    </h6>
                    <div className="flex items-center mt-4">
                      <Image
                        src={item.img}
                        width={41}
                        height={42}
                        alt="bussiness img"
                      />
                      <div className="ml-2">
                        <p className="ff-inter font-bold text-base text-blueshade1">
                          {item.name}
                        </p>
                        <p className="ff-inter font-bold text-[12px] text-blueshade1">
                          {item.job}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={item.img2}
                      width={133}
                      height={134}
                      alt="bussiness img"
                    />
                  </div>
                </div>
                <div className="h-[1px] w-[100%] mt-[11px] 3xl:mt-[22px] mb-[10px] 3xl:mb-[20px] bg-grey"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessLoved;
