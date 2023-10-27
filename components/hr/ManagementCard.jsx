import Image from "next/image";
import React from "react";

function ManagementCard() {
  return (
    <>
      <div className="flex flex-wrap justify-center  ">
        <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#DBECE5] rounded-[16px]">
          <div className="p-5">
            <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
              Single system for time and attendance{" "}
            </h1>
            <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 ">
              Allows to track employee presence, the time spent at work,
              overtime working hours and the time spent on specific projects by
              each employee
            </p>
            <div className="my-1">
              <Image
                className="mx-auto"
                src={"/images/attendance.png"}
                width={152}
                height={110}
                alt={"img"}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#FFF3EA] rounded-[16px]">
          <div className="p-5 flex flex-col justify-between h-full ">
            <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
              Biometric integration
            </h1>
            <div>
              <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-6  ">
                Facilitates the use of biometric data, such as fingerprints or facial
                recognition, to automatically record the time an employee
                arrives and leaves work
              </p>
              <div className="my-1">
                <Image
                  className="mx-auto"
                  src={"/images/Biometric.png"}
                  width={152}
                  height={110}
                  alt={"img"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#CBD1E5] rounded-[16px]">
          <div className="p-5 flex flex-col justify-between h-full ">
            <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
              Real time calculation
            </h1>
            <div>
              <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-4 ">
                Performs mathematical operations and analyses data as it is being input and performs calculations quickly and accurately
              </p>
              <div className="my-1">
                <Image
                  className="mx-auto"
                  src={"/images/calculation.png"}
                  width={152}
                  height={110}
                  alt={"img"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#BEE1E6] rounded-[16px]">
          <div className="p-5 flex flex-col justify-between h-full ">
            <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
              Reporting and analytics
            </h1>
            <div>
              <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 ">
                Examines and drills down the data, presenting it in a meaningful and actionable way to provide a summary and important metrics to
                decision-makers
              </p>
              <div className="my-1">
                <Image
                  className="mx-auto"
                  src={"/images/analytics.png"}
                  width={122}
                  height={80}
                  alt={"img"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagementCard;
