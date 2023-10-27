import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../hoc/Layout";
import { Switch } from "@headlessui/react";
import PlanPricing2 from "../../../components/pricing/PlanPricing2";



const PosPricing = ({pricingPlans23}) => {
    const [enabled, setEnabled] = useState(false);
    const [clicked,setClicked] = useState(false)
    const router = useRouter();
    const { email } = router.query;


    const comparePlans = ()=>{
      setClicked(true)
    }

    return (
        <>
            <Layout>
                <div className="mx-auto px-3">
                    <h2 style={{marginTop:'1.5rem',marginBottom:'0px',lineHeight:'40px'}} className="text-darkBlack ff-Inter text-[36px] sm:text-3xl font-bold sm:leading-[64px] text-center mx-auto">
                    Select a plan that best suits your needs                   
                     </h2>
                     <p style={{fontWeight:'400'}} className="text-[#475467] ff-Inter text-[22px] sm:text-md sm:leading-[64px] text-center mx-auto">
                     Once you&apos;ve made your selection, you&apos;ll be directed to the sign-up page to create your account                
                     </p>
                    <div className="grid place-items-center px-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                      <div className="grid grid-cols-4 gap-4 w-full">
                        <div className="col-span-1 flex items-center" />
                        <div className="col-span-2 flex items-center justify-center">
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
                        <div className="col-span-1 flex items-center justify-end">
                          <button
                            onClick={comparePlans}
                            style={{ border: '2px solid #2F3856', fontSize: '14px' }}
                            className="bg-blue-500 hover:bg-blue-700 text-[#2F3856] font-bold py-2 px-4 rounded hidden lg:block"
                          >
                            Compare Plans
                          </button>
                        </div>
                      </div>
                      <style jsx>
                        {`
                          @media (max-width: 767px) {
                            .grid-cols-4 {
                              grid-template-columns: 1fr;
                            }
                            .col-span-1,
                            .col-span-2 {
                              width: 100%;
                            }
                            .col-span-2 {
                              justify-content: flex-start;
                              margin-bottom: 10px;
                            }
                            .col-span-1:last-child {
                              justify-content: center;
                            }
                          }
                        `}
                      </style>
                    </div>
                    <div className="px-4">
                        <PlanPricing2 plan={enabled ? 12 : 1} pricingPlans23={pricingPlans23} isBestPlan={false} clicked={clicked} email={email} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default PosPricing;

export async function getStaticPaths() {
    const url = `${process.env.NEXT_PUBLIC_Plans}find`;
    let reQBody = {
      "collection":"product_plans",
      "database":process.env.NEXT_PUBLIC_MONGO_DB_DATABASE,
      "dataSource":process.env.NEXT_PUBLIC_MONGO_DB_DATASOURCE,
      "filter": {}
    }
    const options = {
      method: 'POST',
      body:JSON.stringify(reQBody),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers":"*",
        "api-key":`${process.env.NEXT_PUBLIC_MONGO_DB_API_KEY}`
      }
    };
  
    const response = await fetch(url, options);
    const data = await response.json();
    const plans = data.documents;  
    const paths = plans.map((plan) => ({
      params: { pospricing: plan.product_id.toString() },
    }));
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const { pospricing } = params;
    const url = `${process.env.NEXT_PUBLIC_Plans}findOne`;
    let reQBody = {
      "collection":"product_plans",
      "database":process.env.NEXT_PUBLIC_MONGO_DB_DATABASE,
      "dataSource":process.env.NEXT_PUBLIC_MONGO_DB_DATASOURCE,
      "filter": {"product_id":pospricing}
    }
    const options = {
      method: 'POST',
      body:JSON.stringify(reQBody),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers":"*",
        "api-key":`${process.env.NEXT_PUBLIC_MONGO_DB_API_KEY}`
      }
    };
    
    const response = await fetch(url, options);
    const data = await response.json();
    const pln = data.document.plan_json
    const pricingPlans23 = JSON.parse(pln)
    return {
      props: {
        pricingPlans23
      },
      revalidate: 900 
    };
  }