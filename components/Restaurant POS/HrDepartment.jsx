import Image from "next/image";
import React from "react";

function HrDepartment() {
  return (
    <>
      <div className="max-w-[1120px] mx-auto md:mt-[100px] sm:mt-[70px] mt-[30px]  px-4 xl:px-5 px-md-5 ">
        <div className="flex  lg:flex-row flex-col lg:justify-between ">
          <div className="lg:max-w-[700px]   my-10 xl:pr-4 lg:pr-6 hidden lg:block">
            <Image
              className="lg:mx-0 mx-auto "
              src="/images/content-management.webp"
              width={859}
              height={772}
              alt="inventory managment img"
            />
          </div>
          <div className="sm:my-10 my-4 lg:max-w-[550px] xl:pl-4 lg:pl-6">
            <div>
              <h1 className="leading-[115%] md:text-3xl text-2xl font-bold text-darkBlack  ">
              Order Management
              </h1>
              <p className="my-6   text-sm text-lightgrey leading-[130%]">
              Efficiently manage orders with our comprehensive order management system, enabling seamless order processing, tracking, and fulfillment, optimizing customer satisfaction and operational efficiency
              </p>
              <div className="lg:max-w-[700px]   my-10 xl:pr-4 lg:pr-6  lg:hidden">
                <Image
                  className="lg:mx-0 mx-auto "
                  src="/images/content-management.webp"
                  width={859}
                  height={772}
                  alt="inventory managment img"
                />
              </div>
              <div className="border-t border-dashed border-[#006D77] ">
                <div className="flex sm:flex-row flex-col sm:items-end  w-full sm:my-5 my-8">
                  <div className="lg:max-w-[555px] sm:max-w-[calc(100%-150px)] sm:mr-4 lg:mr-2">
                    <div className="flex items-center ">
                      <Image
                        className="max-w-[27px] "
                        src="/images/svg/round-logo.svg"
                        width={27}
                        height={17}
                        alt="logo"
                      />
                      <p className="text-base  font-bold ml-2     ">
                        {" "}
                        Order modifications{" "}
                      </p>{" "}
                    </div>{" "}
                    <p className="mb-[14px] ml-9 mt-2 text-base  leading-[145%] text-lightgrey ">
                    Effortlessly customize orders with our easy order modification feature
                    </p>
                  </div>
                 
                </div>
                <div className="flex sm:flex-row flex-col sm:items-end  w-full sm:my-5 my-8">
                  <div className="lg:max-w-[555px] sm:max-w-[calc(100%-150px)] sm:mr-4 lg:mr-2">
                    <div className="flex items-center ">
                      <Image
                        className="max-w-[27px] "
                        src="/images/svg/round-logo.svg"
                        width={27}
                        height={17}
                        alt="logo"
                      />
                      <p className="text-base  font-bold ml-2     ">
                        {" "}
                        Splitting checks
                      </p>{" "}
                    </div>{" "}
                    <p className="mb-[14px] mt-2 ml-9 text-base  leading-[145%] text-lightgrey ">
                    Seamlessly split checks for hassle-free payment with our splitting checks option
                    </p>
                  </div>
                 
                </div>
                <div className="flex sm:flex-row flex-col sm:items-end  w-full sm:my-5 my-8">
                  <div className="lg:max-w-[555px] sm:max-w-[calc(100%-150px)] sm:mr-4 lg:mr-2">
                    <div className="flex items-center ">
                      <Image
                        className="max-w-[27px] "
                        src="/images/svg/round-logo.svg"
                        width={27}
                        height={17}
                        alt="logo"
                      />
                      <p className="text-base  font-bold ml-2     ">
                        {" "}
                        Table tracking
                      </p>{" "}
                    </div>{" "}
                    <p className="mb-[14px] mt-2 ml-9 text-base  leading-[145%] text-lightgrey ">
                    Streamline table management with real-time updates and wait time tracking
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HrDepartment;
