import Image from "next/image";
import React from "react";

const FinancialManagement = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto w-full px-3 xl:px-0 md:mt-[100px] sm:mt-[70px] mt-[40px] lg:mt-[150px] ">
        <div className="flex flex-col lg:flex-row lg:justify-end relative">
          <div className="lg:absolute max-w-[600px] mx-auto lg:mx-0 lg:max-w-[700px] xl:max-w-[762px] top-0 left-0">
            <Image
              src="/images/financial-management-img.png"
              width={1081}
              height={772}
              alt="financial-management img"
              className="hidden lg:block" 
            />

        </div>

          <div className="lg:max-w-[500px] mt-7 lg:mt-0 w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[53px] text-center lg:text-start max-w-[667px] ">
                Integrated Financial Management
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[17px]">
                Create and monitor new revenue streams, improve cash flow,
                achieve efficiency, and minimize financial risk to unlock the
                true potential of your business
              </p>
            </div>
            <Image
              src="/images/financial-management-img.webp"
              width={1081}
              height={772}
              alt="mobile financial img"
              className="lg:hidden mt-2"
            />
            <div className="border-t-2 mt-4 sm:mt-[15px] xl:mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[15px] xl:mt-[25px] grid sm:grid-cols-2 gap-[10px] xl:gap-[15px]">
                <div className=" mt-[10px] sm:mt-0 max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Flexible Reporting
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    Lower your financial vulnerability by accessing pertinent
                    data insights
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
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Analyse and Forecast
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey ">
                    Enhance your company&apos;s flexibility and responsiveness
                    by implementing financial planning throughout your entire
                    organization
                  </p>
                </div>
                <div className=" max-w-[325px] mt-[15px] lg:mt-0">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Control Expenses
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    Achieve greater efficiency in closing, cash management, and
                    reporting to control costs
                  </p>
                </div>
                <div className=" max-w-[325px] mt-[15px] lg:mt-0">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Attain Efficiency
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    Gain effective and streamlined performance in financial
                    operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;
