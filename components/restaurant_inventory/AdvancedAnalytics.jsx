import Image from "next/image";
import React from "react";

const AdvancedAnalytics = () => {
  return (
    <div>
      <div className="max-w-[1150px] mx-auto px-3 xl:px-0 mt-[40px] sm:mt-[70px] md:mt-[100px] ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="max-w-[480px] mt-9 lg:mt-0 mx-auto lg:mx-0 xl:max-w-[550px] w-full relative hidden lg:block ">
            <Image
              src="/images/restaurant-3-img.webp"
              width={637}
              height={738}
              alt="advanced img"
            />
          </div>
          <div className="max-w-[480px] mx-auto lg:mx-0 lg:max-w-[550px] w-full ">
            <div>
              <p className="text-xl sm:text-3xl md:text-9xl text-center lg:text-start font-bold text-darkBlack leading-[40px] sm:leading-[46px] md:leading-[55px] mb-5">
                Smoothly blending Integrations
              </p>
              <p className="text-sm sm:text-md text-center lg:text-start font-normal text-lightgrey">
                Our apps seamlessly integrate with other market apps, offering a
                comprehensive, efficient, and future-proof solution for your
                restaurant's operations
              </p>

              <div className="max-w-[480px] mt-9 lg:mt-0 mx-auto lg:mx-0 xl:max-w-[550px] w-full relative lg:hidden ">
                <Image
                  src="/images/restaurant-3-img.webp"
                  width={637}
                  height={738}
                  alt="advanced img"
                />
              </div>

              <div className="mt-[10px]">
                <p className="text-xs font-bold text-darkBlack leading-[22px]">
                  Ecosystem Collaboration
                </p>

                <p className="text-sm sm:text-xs mt-2 font-normal text-lightgrey">
                  Integrating smoothly with other apps fostering collaboration
                  within the broader business ecosystem and enabling
                  partnerships with complementary services or platforms
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-xs font-bold text-darkBlack leading-[22px]">
                  Centralized Management
                </p>
                <p className="text-sm sm:text-xs mt-2 font-normal text-lightgrey">
                  With smooth integration, your restaurant can manage multiple
                  apps from a centralized dashboard or interface simplifying
                  administration and reducing complexity
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-xs font-bold text-darkBlack leading-[22px]">
                  Future-Proofing
                </p>
                <p className="text-sm sm:text-xs mt-2 font-normal text-lightgrey">
                  Smooth integration ensures that our suite of apps remains
                  adaptable to future market trends and technology advancements
                  enabling the incorporation of emerging tools, services, or
                  industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
