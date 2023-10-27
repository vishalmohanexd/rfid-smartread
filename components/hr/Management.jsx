import React from "react";
import ManagementCard from "./ManagementCard";

function Management() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto   sm:mt-[70px] mt-[30px]  px-4 xl:px-5 px-md-5 ">
        <div className="px-[9px] management-bg-img">
          <h1 className="leading-[115%] xl:text-3xl sm:text-2xl text-xl font-bold text-darkBlack pt-8 mx-2  ">
            Time Management is an art
          </h1>
          <p className="my-6   sm:text-[20px]  text-sm text-lightgrey leading-[130%] pt-8 mx-2">
            TIME TRACKING - Enables you to organize and plan your time to work
            smarter. Keep track of your team’s working hours with online
            timesheets and simplify your processes
          </p>
          <div className="flex flex-wrap">
            <ManagementCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Management;
