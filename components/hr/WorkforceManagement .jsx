import Image from "next/image";
import React from "react";

function WorkforceManagement() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto md:mt-[100px] sm:mt-[70px] mt-[30px]  md:px-4 xl:px-5  ">
        <div className="workforcemanagement-bg-img      sm-p-7 p-4 flex lg:flex-row flex-col xl:items-end items-center">
          <div className="  lg:max-w-[613px] xl:ml-6 ">
            <h1 className="leading-[115%]   md:text-3xl text-2xl font-bold text-white mt-2">
              {" "}
              Workforce management{" "}
            </h1>
            <p className="my-6 lg:text-[20px]   text-sm text-white leading-[130%]">
              Optimizes employee effiency, provides an exceptional employee
              experience, enables real-time visibility and reduces integrity risk
            </p>
            <div className="border-t border-dashed border-[#006D77] flex flex-wrap lg:justify-between   xl:pl-6 ">
              <div className="md:max-w-[260px]   sm:mr-4  my-3 sm:pt-4 pt-5">
                <div className="flex items-center ">
                  <Image
                    className="max-w-[27px] "
                    src="/images/svg/round-logo.svg"
                    width={27}
                    height={17}
                    alt="logo"
                  />
                  <p className="text-base  font-bold ml-2  text-white   ">
                    {" "}
                    Manpower hunt
                  </p>{" "}
                </div>{" "}
                <p className="my-[14px]   text-base leading-[145%] text-white ">
                  Identify and attract the best suitable candidates and ensure
                  that new hires fit the role through best methods and tools
                </p>
              </div>
              <div className="md:max-w-[260px]   sm:mr-4  my-3 sm:pt-4">
                <div className="flex items-center ">
                  <Image
                    className="max-w-[27px] "
                    src="/images/svg/round-logo.svg"
                    width={27}
                    height={17}
                    alt="logo"
                  />
                  <p className="text-base font-bold ml-2  text-white   ">
                    {" "}
                    Scrutinize requirements
                  </p>{" "}
                </div>{" "}
                <p className="my-[14px]   text-base leading-[145%] text-white ">
                  Create job profiles,evaluate,select,recruite and facilitate training programs
                </p>
              </div>
              <div className="md:max-w-[260px]   sm:mr-4  my-3">
                <div className="flex items-center ">
                  <Image
                    className="max-w-[27px] "
                    src="/images/svg/round-logo.svg"
                    width={27}
                    height={17}
                    alt="logo"
                  />
                  <p className="text-base font-bold ml-2  text-white   ">
                    {" "}
                    Updation
                  </p>{" "}
                </div>{" "}
                <p className="my-[14px]   text-base leading-[145%] text-white ">
                  Facilitates smooth add,updation and making changes to employees personal,professional and administrative details
                </p>
              </div>
              <div className="md:max-w-[260px]   sm:mr-4  my-3 pb-3 sm:pb-0">
                <div className="flex items-center ">
                  <Image
                    className="max-w-[27px] "
                    src="/images/svg/round-logo.svg"
                    width={27}
                    height={17}
                    alt="logo"
                  />
                  <p className="text-base font-bold ml-2  text-white   ">
                    {" "}
                    Job Change
                  </p>{" "}
                </div>{" "}
                <p className="my-[14px]   text-base leading-[145%] text-white ">
                  Streamline and automate the process of managing job changes and employee shifts and shuffles with position management
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 ">
            <Image
              className=" "
              src="/images/dd.png"
              width={614}
              height={348}
              alt="img"
            />
            {/* <img src="/images/dd.png" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkforceManagement;
