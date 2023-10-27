import Image from "next/image";
import React from "react";

const PosAnytime = () => {
  return (
    <div className="relative">
      <div className="max-w-[1200px] mx-auto px-3 mt-20">
        <div className="grid xl:grid-cols-2 gap-[25px] sm:mx-8 relative ">
          <div className="xl:max-w-[702px]">
            <div className="flex justify-center xl:justify-start">
              <h2 className="ff-Inter font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[54px] text-center xl:text-start max-w-[667px] ">
                Feature Overload!
              </h2>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="ff-inter font-normal text-center xl:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[22px]">
                CW Suite apps are packed with features to enhance the overall
                dining experience for customers and streamline operations for
                restaurant owners
              </p>
            </div>
            <div className="max-w-[550px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full  lg:hidden">
              <img
                src="/images/feature-overload.webp"
                alt="and there more img"
                className="w-[500px] h-full"
              />
            </div>
            <div className="border-t-2 mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[48px] grid sm:grid-cols-2 gap-[15px] md:gap-[30px]">
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Menu and Ordering
                    </p>
                  </div>

                  <p className="font-normal mt-3 ff-inter text-base">
                    Digital menu with descriptions and images of dishes;
                    Customers can place orders directly from the app
                  </p>
                </div>

                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Table Reservations
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base ">
                    We offer table reservation feature, allowing customers to
                    book a table in advance to reduce waiting times
                  </p>
                </div>
                <div className="mt-[15px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Online Payments
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    Integration with secure payment gateways enables customers
                    to make convenient and contactless payments
                  </p>
                </div>
                <div className="mt-[15px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={13}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-Inter ml-[5px] text-xs font-bold text-darkBlack">
                      Order Tracking
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base">
                    Real-time updates of orders to provide transparency and
                    enhance the overall customer experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[550px] mx-auto lg:mx-0 mt-9 lg:mt-0 lg:pl-2 xl:pl-0 w-full hidden lg:block">
            <img
              src="/images/feature-overload.webp"
              alt="and there more img"
              className="w-[500px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosAnytime;
