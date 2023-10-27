import React from "react";
import { yourfreeapps } from "../common/Helper";
import AppsCard from "./AppsCard";

const YourPaidApps = () => {
  return (
    <>
      <h2 className="text-darkblack text-[28px] font-semibold ff-inter mb-6">
        Your apps
      </h2>

      <div className="flex flex-wrap pb-6">
        {yourfreeapps &&
          yourfreeapps.map((obj, index) => <AppsCard key={index} obj={obj} />)}
      </div>
    </>
  );
};

export default YourPaidApps;
