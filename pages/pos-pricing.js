import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import PageSEO from "../components/common/PageSEO";
import PlanPricing from "../components/pricing/PlanPricing";
import Layout from "../hoc/Layout";

const PosPricing = () => {
  const [enabled, setEnabled] = useState(false);

  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}pricing`



  return (
    <>
      <PageSEO title="Pricing"  canonicalTag={canonicalTag}/>
      <Layout>
        <div className="container mx-auto px-3">
          <h2 className="text-darkBlack ff-Inter text-[36px] sm:text-3xl font-bold sm:leading-[64px] text-center mx-auto  my-6">
          Select a plan that best suits your needs          
          </h2>

          <div className="grid place-items-center">
            <div className="flex items-center">
              <span className="text-[14px] px-3 font-medium ff-inter">
                Bill Monthly
              </span>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-[#2952A5]" : "bg-[#101828]"}
          relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-[#F2F4F7] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <span className="text-[16px] px-3 font-medium ff-inter">
                Bill Annually
              </span>
            </div>
          </div>
          <div className="px-4">
            <PlanPricing plan={enabled ? 12 : 1} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PosPricing;
