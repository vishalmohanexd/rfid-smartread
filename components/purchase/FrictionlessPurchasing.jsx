import React, { useState } from "react";
import { RotateArrowIcon } from "../common/Icons";
import InvoiceManagementTab from "./tabs/InvoiceManagementTab";
import PaymentAutomationTab from "./tabs/PaymentAutomationTab";
import PoManagement from "./tabs/PoManagementTab";
import QuotationManagementTab from "./tabs/QuotationManagementTab";
import VendorManagement from "./tabs/VendorManagementTab";

const FrictionlessPurchasing = () => {
  const [active, setActive] = useState("po-management");

  return (
    <>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 w-full relative">
        <h2 className="ff-inter font-bold sm:text-3xl text-[30px] text-darkBlack leading-[46px] md:leading-[54px] text-center mb-6 xl:mb-10">
          Frictionless purchasing, every time
        </h2>
        <div className="pb-3 flex items-center overflow-auto flex-nowrap max-w-full">
          <button
            onClick={() => setActive("po-management")}
            className={`${
              active === "po-management"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[62px] px-2 py-3 border text-xs sm:text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            PO Management
          </button>
          <button
            onClick={() => setActive("vendor-management")}
            className={`${
              active === "vendor-management"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[62px] px-2 py-3 border text-xs sm:text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap ml-2 hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Vendor Management
          </button>
          <button
            onClick={() => setActive("quotation-management")}
            className={`${
              active === "quotation-management"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[62px] px-2 py-3 border text-xs sm:text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap mx-1.5 hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Quotation Management
          </button>
          <button
            onClick={() => setActive("invoice-management")}
            className={`${
              active === "invoice-management"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[62px] px-2 py-3 border text-xs sm:text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap mr-2 hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Invoice Management
          </button>
          <button
            onClick={() => setActive("payment-automation")}
            className={`${
              active === "payment-automation"
                ? "bg-darkBlack border-darkBlack text-white"
                : "border-[#C6C6C6] text-lightgrey"
            } w-full h-[62px] px-2 py-3 border text-xs sm:text-base rounded-[5px]  font-semibold leadind-[32px] ff-inter whitespace-nowrap hover:bg-darkBlack hover:border-darkBlack hover:text-white`}
          >
            Payment Automation
          </button>
        </div>
        {active === "po-management" && <PoManagement />}
        {active === "vendor-management" && <VendorManagement />}
        {active === "quotation-management" && <QuotationManagementTab />}
        {active === "invoice-management" && <InvoiceManagementTab />}
        {active === "payment-automation" && <PaymentAutomationTab />}
      </div>
    </>
  );
};

export default FrictionlessPurchasing;
