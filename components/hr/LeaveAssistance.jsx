import Image from "next/image";
import React from "react";

function LeaveAssistance() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto md:mt-[100px] sm:mt-[70px] mt-[30px]  px-4 xl:px-5 px-md-5 ">
        <div className="flex  lg:flex-row flex-col lg:justify-between ">
          <div className="lg:max-w-[800px]   my-10  lg:pr-6 hidden lg:block ">
            <Image
              className="lg:mx-0 mx-auto "
              src="/images/assistanceimg.png"
              width={829}
              height={729}
              alt=" img"
            />
          </div>
          <div className="sm:my-10 my-4 lg:max-w-[611px] xl:pl-4 lg:pl-6">
            <div>
              <h1 className="leading-[115%] md:text-3xl text-2xl font-bold text-darkBlack  ">
                Leave assistance
              </h1>
              <p className="my-6 lg:text-[20px]  text-sm text-lightgrey leading-[130%]">
                Keep a record of all your employees time off effortlessly
              </p>

              <div className="lg:max-w-[800px]   my-10  lg:pr-6  lg:hidden ">
            <Image
              className="lg:mx-0 mx-auto "
              src="/images/assistanceimg.png"
              width={829}
              height={729}
              alt=" img"
            />
          </div>
              <div className="border-t border-dashed border-[#006D77] ">
                <div className="   w-full my-8">
                  <p className="text-sm font-bold      "> Leave requests</p>{" "}
                  <p className="mb-[14px] mt-2 text-sm leading-[145%] text-lightgrey ">
                    Handling your employees leave requests by allowing them to
                    propose directly and get notified. Decide to either approve
                    or to refuse, and add refusal explanation easily
                  </p>
                </div>{" "}
                <div className="   w-full my-8">
                  <p className="text-sm font-bold      "> Compute balance </p>{" "}
                  <p className="mb-[14px] mt-2 text-sm leading-[145%] text-lightgrey ">
                    Calculate the number of leave hours available for each
                    employee based on the number of days worked or the length of
                    time an employee has been with the company
                  </p>
                </div>{" "}
                <div className="   w-full my-8">
                  <p className="text-sm font-bold      "> Adjustment </p>{" "}
                  <p className="mb-[14px] mt-2 text-sm leading-[145%] text-lightgrey ">
                    Prepare leave adjustment record for all the unplanned
                    employee time off with the leave balance assigned according
                    to the company’s policies efficiently
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveAssistance;
