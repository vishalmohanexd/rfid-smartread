import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 md:mt-[50px] sm:mt-[30px] mt-[20px] lg:mt-[50px] mb-10">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:max-w-[550px]  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className=" font-bold text-[22px] sm:text-2xl text-darkBlack leading-[28px] sm:leading-[40px] md:leading-[64px] text-center lg:text-start max-w-[667px] ">
              Why Choose RFID Connect?
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-[18px] sm:text-[18px] text-lightgrey max-w-[702px] mt-[11px] sm:mt-[15px]">
              Revolutionize your retail experience with our suite of RFID-powered apps. Streamline inventory management, enhance customer interactions, and boost sales efficiency with real-time product tracking and personalized recommendations
              </p>
            </div>
            <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
              <div className="block lg:hidden">
                <Image
                  src="/images/rfid-section2.png"
                  width={735}
                  height={660}
                  alt="invoicing pricing img"
                />
              </div>
            </div>

            <div className="border-t-2 mt-[15px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[10px] grid sm:grid-cols-2 gap-[10px] xl:gap-[15px]">
                <div className=" mt-[10px] sm:mt-0 max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                    Efficiency
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                  Our solutions automate routine tasks, allowing you to run a leaner, more efficient operation
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
                    Security
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey ">
                  With our advanced anti-theft systems, your assets are always protected
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
                    Customer Experience
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                  We go beyond the basics to offer a shopping experience your customers will love
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
                    Scalability
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                  As your business grows, RFID Connect grows with you, making it a future-proof investment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
            <div className="hidden lg:block">
              <Image
                src="/images/rfid-section2.png"
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

export default Connect;
