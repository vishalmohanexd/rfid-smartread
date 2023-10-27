import Image from "next/image";
import React from "react";

function HrDepartment() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto md:mt-[100px] sm:mt-[70px] mt-[30px]  px-4 xl:px-5 px-md-5 ">
        <div className="flex  lg:flex-row flex-col lg:justify-between ">
          <div className="lg:max-w-[700px]   my-10 xl:pr-4 lg:pr-6 hidden lg:block">
            <Image
              className="lg:mx-0 mx-auto "
              src="/images/hr-department.png"
              width={859}
              height={772}
              alt="inventory managment img"
            />
          </div>
          <div className="sm:my-10 my-4 lg:max-w-[550px] xl:pl-4 lg:pl-6">
            <div>
              <h1 className="leading-[115%] md:text-3xl text-2xl font-bold text-darkBlack  ">
                Integrated human resource department
              </h1>
              <p className="my-6   text-sm text-lightgrey leading-[130%]">
                Effective management of recruitment, development, performance
                appraisal , employee relations and administration to attain
                strategic goals with streamlined human capital
              </p>
              <div className="lg:max-w-[700px]   my-10 xl:pr-4 lg:pr-6  lg:hidden">
                <Image
                  className="lg:mx-0 mx-auto "
                  src="/images/hr-department.png"
                  width={859}
                  height={772}
                  alt="inventory managment img"
                />
              </div>
              <div className="border-t border-dashed border-[#006D77] ">
                <div className="flex sm:flex-row flex-col sm:items-end  w-full sm:my-5 my-8">
                  <div className="lg:max-w-[355px] sm:max-w-[calc(100%-150px)] sm:mr-4 lg:mr-2">
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
                        Employee database{" "}
                      </p>{" "}
                    </div>{" "}
                    <p className="mb-[14px] mt-2 text-base  leading-[145%] text-lightgrey ">
                      Enables you to store, manage, and track employee’s data
                      centrally and maintains different feilds of personnel data
                    </p>
                  </div>
                  <div>
                    <Image
                      className=" "
                      src="/images/cardimg.png"
                      width={127}
                      height={106}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:items-end  w-full sm:my-5 my-8">
                  <div className="lg:max-w-[355px] sm:max-w-[calc(100%-150px)] sm:mr-4 lg:mr-2">
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
                        Shift contol
                      </p>{" "}
                    </div>{" "}
                    <p className="mb-[14px] mt-2 text-base  leading-[145%] text-lightgrey ">
                      Determine and import shift rosters along with management
                      of overtime work hours and shift handovers
                    </p>
                  </div>
                  <div>
                    <Image
                      className=" "
                      src="/images/cardimg2.png"
                      width={127}
                      height={106}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:items-end  w-full sm:my-5 my-8">
                  <div className="lg:max-w-[355px] sm:max-w-[calc(100%-150px)] sm:mr-4 lg:mr-2">
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
                        Payroll management
                      </p>{" "}
                    </div>{" "}
                    <p className="mb-[14px] mt-2 text-base  leading-[145%] text-lightgrey ">
                      Design and administrate the compensation packages,
                      policies. Smoothly add, change and update pay stuctures
                    </p>
                  </div>
                  <div>
                    <Image
                      className=" "
                      src="/images/cardimg3.png"
                      width={127}
                      height={106}
                      alt="img"
                    />
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
