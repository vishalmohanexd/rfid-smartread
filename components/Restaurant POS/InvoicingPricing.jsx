import Image from "next/image";
import React from "react";

const InvoicingPricing = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 lg:mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:max-w-[550px]  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className=" font-bold md:text-9xl text-xl sm:text-2xl text-darkBlack leading-[28px] sm:leading-[40px] md:leading-[64px] text-center lg:text-start max-w-[667px] ">
                Unified Inventory management
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[15px]">
                Manage all your inventory in one place with our integrated
                system, streamlining operations and reducing complexity{" "}
              </p>
            </div>
            <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
              <div className="block lg:hidden">
                <Image
                  src="/images/restaurant-management2.webp"
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
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Track inventory levels in
                    </p>
                  </div>
                  <div>
                  <p className=" ml-[30px] font-bold text-xs xl:text-sm text-darkBlack">
                      real-time
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    Never run out of stock with our real-time inventory tracking
                    and automatic reordering feature
                  </p>
                </div>
                <div className="max-w-[325px] mt-[15px] sm:mt-0">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Automatic setup
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey ">
                    The latest design trends meet flexible grids, layouts and
                    intelligent use of CSS
                  </p>
                </div>
                <div className="mt-[15px] max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Smooth reordering
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    Effortlessly maintain optimal inventory levels, ensuring you
                    never run out of stock and maximizing your sales potential
                  </p>
                </div>
                <div className="mt-[15px] max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Generate reports
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    Gain valuable insights into inventory levels and sales
                    trends with our powerful reporting feature
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
            <div className="hidden lg:block">
              <Image
                className="absolute"
                style={{ zIndex: 1, width: "350px" }}
                src="/images/restaurant-management2.webp"
                width={335}
                height={60}
                alt="invoicing pricing img"
              />
              <Image
                className="relative"
                style={{ top: 100, left: 40, width: "800px", height: "420px" }}
                src="/images/restaurant-management1.webp"
                width={600}
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

export default InvoicingPricing;
