import Link from "next/link";
import React, { useState,useEffect } from "react";
import { Switch } from "@headlessui/react";
import axios from 'axios'
import { bestplanData } from "../common/Helper";
import { LeftArrow, YesIcon } from "../common/Icons";
import PlanPricing2 from "../../components/pricing/PlanPricing2"

const BestPlan = (id) => {
  const productname = id.id
  const [enabled, setEnabled] = useState(false);
  const [country,setCountry] = useState(null)
  const [pricingPlans2,setPricingPlans] = useState([])
  const [planD,setPlanD] = useState({})

  let planValue = enabled === false ? 1:12

  useEffect(()=>{
    fetch(`https://get.geojs.io/v1/ip/geo.json`)
      .then(response => response.json())
      .then(data => {
        setCountry(data.country)
      });
 
},[])

  useEffect(()=>{
    if(productname !== undefined){
          let reQBody = {
            "collection":"product_plans",
            "database":process.env.NEXT_PUBLIC_MONGO_DB_DATABASE,
            "dataSource":process.env.NEXT_PUBLIC_MONGO_DB_DATASOURCE,
            "filter": {"product_id":productname}
          }
            axios.post('/api/plans',reQBody,{
          })
          .then(response => {
            if(response.status === 200){
              if(response.data.document !== null){
                const pln = response.data.document.plan_json
                const planD = JSON.parse(pln)
                const plnDD = (planD.plan).slice(1)
                setPlanD(planD)
                setPricingPlans(plnDD)
              }
            }
          })
          .catch(error => {
          });
        }
  },[productname])

  return (
    <div>
      <div className="container mx-auto my-20 sm:my-[80px]  px-3">
        <h2 className="font-bold ff-Inter leading-[45px] sm:leading-0 text-[23px]  sm:text-3xl md:text-[48px] text-darkBlack text-center mb-8">
          Pick a plan that’s best for you
        </h2>
        <div className="grid place-items-center px-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                      <div className="w-full">
                        <div className="flex items-center" />
                        <div className="flex items-center justify-center">
                          <span className="text-[14px] px-3 font-medium ff-inter">Bill Monthly</span>
                          <Switch
                            style={{ border: '2px solid #CFE597', padding: '2.5px' }}
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-[#FFFFFF]' : 'bg-[#FFFFFF]'}
                              relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                                pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-[#9AC331] shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                          </Switch>
                          <span className="text-[14px] px-3 font-medium ff-inter">Bill Yearly</span>
                        </div>
                      </div>
                    </div>
        {Object.keys(planD).length  === 0  ? null :
        <PlanPricing2 plan={planValue} pricingPlans23={planD} isBestPlan={true}/>
        }
      </div>
    </div>
  );
};

export default BestPlan;
