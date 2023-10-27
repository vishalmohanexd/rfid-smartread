import React, { useState } from "react";
import CustomerAccounts from "./CustomerAccounts";
import AnalyticsTabs from "./tabs/AnalyticsTabs";
import InvoicingTabs from "./tabs/InvoicingTabs";
import ProductTabs from "./tabs/ProductTabs";
import ReturnsTabs from "./tabs/ReturnsTabs";
import ShipmentTabs from "./tabs/ShipmentTabs";

const UnlockBoostProductivity = () => {
  const [active, setActive] = useState("Product");

  return (
    <div className="max-w-[1120px] mx-auto px-3 xl:px-0">
      <h2 className="ff-inter font-bold sm:text-3xl text-xl text-darkBlack leading-[28px] sm:leading-[48px] md:leading-[54px] text-center mb-6 xl:mb-10">
        Unlock your sales potential and boost productivity
      </h2>
      <div className="overflow-x-auto">
        <div className="flex w-[720px] md:w-full items-center justify-center">
          <button
            onClick={() => setActive("Product")}
            className={`${
              active === "Product"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[48px] md:h-[62px] px-2 py-3 border text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Product
          </button>
          <button
            onClick={() => setActive("Invoicing")}
            className={`${
              active === "Invoicing"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[48px] md:h-[62px] px-2 py-3 border text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap ml-6 hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Invoicing
          </button>
          <button
            onClick={() => setActive("Shipment")}
            className={`${
              active === "Shipment"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[48px] md:h-[62px] px-2 py-3 border text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap mx-6 hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Shipment
          </button>
          <button
            onClick={() => setActive("Returns")}
            className={`${
              active === "Returns"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[48px] md:h-[62px] px-2 py-3 border text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap mr-6 hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Returns
          </button>
          <button
            onClick={() => setActive("Analytics")}
            className={`${
              active === "Analytics"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[48px] md:h-[62px] px-2 py-3 border text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Analytics
          </button>
        </div>
      </div>
      <div className="transition duration-300">
        {active === "Product" && <ProductTabs />}
        {active === "Invoicing" && <InvoicingTabs />}
        {active === "Shipment" && <ShipmentTabs />}
        {active === "Returns" && <ReturnsTabs />}
        {active === "Analytics" && <AnalyticsTabs />}
      </div>
    </div>
  );
};

export default UnlockBoostProductivity;
