import React from "react";
import { yourfreeapps } from "../common/Helper";
import AppsCard from "./AppsCard";

const YourFreeApps = () => {
  return (
    <>
      <h2 className="text-darkblack text-[28px] font-semibold ff-inter my-6">
        Your free apps
      </h2>

      <div className="flex flex-wrap">
        {yourfreeapps &&
          yourfreeapps.map((obj, index) => <AppsCard key={index} obj={obj} />)}
      </div>
    </>
  );
};

export default YourFreeApps;
