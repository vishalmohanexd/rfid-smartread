/*eslint-disabled*/
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { ForwordIcon } from "./Icons";
import { TickMark } from "./Icons";
import Loader from "../common/Loader";


const PlanPricing1 = ({ plan ,pricingPlans23}) => {
  const [country,setCountry] = useState(null)
  const [pricingPlans2,setPricingPlans] = useState(pricingPlans23 === undefined || pricingPlans23 === null ?{}:pricingPlans23)

  const [loading,setLoading] = useState(false)
  let planValue = plan === 1 ? 'Monthly':'Yearly'
  
  useEffect(()=>{
    fetch(`https://get.geojs.io/v1/ip/geo.json`)
      .then(response => response.json())
      .then(data => {
        setCountry(data.country)
      });
 
},[])
  
    const getStarted = (x,freetrial) =>{
      let preferenceId = null
      for (let index = 0; index < x.pricing.length; index+=1) {
        const country1 = x.pricing[index].country;
        const billingPeriod = x.pricing[index].billingPeriod;
        if(country1 === country && planValue === billingPeriod){
          preferenceId = x.pricing[index].preferenceId
        }

        
      }
      window.open(`${process.env.NEXT_PUBLIC_Auth}/?planId=${preferenceId}&freeTrial=${freetrial}&country=${country}`, "_blank");
    }

  return (
    <div className="max-w-[1100px] px-2 justify-between overflow-auto xl:overflow-hidden  mt-10 flex mx-auto">
      {loading ?
      <div className="absolute left-0 top-0 flex justify-center items-center  w-full h-full bg-white-o-87 rounded-[12px]">
      <Loader />
      </div>:
      <div className=" flex plan-box">
        <div className="w-[150px]">
          <div className="h-[300px] border-r-[1px] border-[#101828]"></div>
            {Object.keys(pricingPlans2).length  === 0  ? null: pricingPlans2.plan[0].features.map((plandata)=>
              <div key={plandata.FeatureGroupName}>
              <div className="h-[46px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-bold bg-[#ECECEC]">
                {plandata.FeatureGroupName}
               </div>
               {plandata.FeatureData.map((featurNames)=>
               <div key={featurNames.name} className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[16px] items-center border-[1px] border-r-[#101828]">
               {featurNames.name}
               </div>
               )}
               </div>
            )}
        </div>
        {Object.keys(pricingPlans2).length  === 0  ? null: pricingPlans2.plan.map((x, index)=>{
         return index === 0 ?null:
          <div key={index} className= {pricingPlans2.plan.length - 2 === index - 1 ?"w-[222px]" : "w-[222px] border-r-[1px] border-[#101828]"}>
            <div className="h-[300px]">
            <div className="flex flex-col justify-center">
              <h3 className="text-center mt-[45px] text-[18px] font-medium ff-Inter">
                {x.name}
              </h3>
              <p className="px-5 text-center mt-[18px] text-[15px] ff-inter text-[#98A2B3]">
                {x.description}
              </p>
              <div className="flex justify-center mt-[15px]">
                <p className="ff-Inter  text-[35px] font-medium text-[#101828]">
                {x.pricing.length > 0 ?
                x.pricing.map((priceData)=>{
                  return (
                    <span>
                      {priceData.country === country && planValue === priceData.billingPeriod ? `${priceData.currencySymbol}${priceData.price}`:null}
                    </span>
                  )
                }) 
                
                :0}
                </p>{" "}
                <p className="mt-[20px] text-[#98A2B3] ff-inter">
                  /{plan === 12 ? "Yearly" : "Monthly"}{" "}
                </p>
              </div>
              <div className="px-5 mt-4">
                <button onClick={() =>getStarted(x,x.freetrial)} className="flex w-full trial-btn py-2 bg-[#101828] rounded-[6px] justify-center items-center">
                  <span className="text-white ff-inter text-[15px] font-bold">
                    Get Started
                  </span>
                  <span className="ml-1">
                    <ForwordIcon />
                  </span>
                </button>
              </div>
             </div>
            </div> 
            {x.features.map((xfeatures)=>{
              return (
                <>
                <div className="h-[46px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-bold bg-[#ECECEC]">
               </div>
               {xfeatures.FeatureData.map((xfeaturesEnabled)=>
                <div className="h-[46px] ff-inter text-[#1D2939] flex justify-center text-[16px] items-center border-[1px]">
                {xfeaturesEnabled.enabled === "Y" ? <TickMark /> : null}
                </div>
                )}
                </>
              )
            })}
        </div>
        })
        }
        
      </div>}
    </div>
  );
};

export default PlanPricing1;



