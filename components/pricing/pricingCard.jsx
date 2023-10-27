import { CheckIcon } from '@heroicons/react/solid'
import { ForwordIcon } from "./Icons";
import { ForwordIcon2 } from "./Icons";


import {YesIcon2} from "../common/Icons"

export default function PricingCard({ title, price, features,index, plan_id,planValue,country,description,x,email}) {
    const getStarted = (x,freetrial) =>{
        let preferenceId = null
        let newPrice = null
        for (let index = 0; index < x.pricing.length; index+=1) {
          const country1 = x.pricing[index].country;
          const billingPeriod = x.pricing[index].billingPeriod;
          if(country === "India"){
            if(country1 === country && planValue === billingPeriod){
              preferenceId = x.pricing[index].preferenceId
              newPrice = x.pricing[index]
            }
          }else{
            if(country1 === "United States" && planValue === billingPeriod){
              preferenceId = x.pricing[index].preferenceId
              newPrice = x.pricing[index]
            }
          }
        }
        if(newPrice){
          window.open(`${process.env.NEXT_PUBLIC_Auth}sign-up/?planId=${preferenceId}&freeTrial=${freetrial}&country=${country}&username=${email === undefined || email === "" || email === null ? "":email}`, "_blank");
        }
      }

    return (
    <div key={title +`-1`} style={{borderRadius:'16px',border:'1px solid #E8E8E8',boxShadow:'4px 6px 21px rgba(0, 0, 0, 0.1)',maxWidth:'300px',paddingLeft:'40px',paddingRight:'40px'}} className={`border-gray-200 rounded-md shadow-sm p-6 ${x.ispopuler === "Y" ? 'cardBackground' : ''}`}>
      <div style={{height:'185px',overflow:'hidden'}}>
      <div>
      {x.ispopuler === "Y" && 
        <button style={{background:'#0000FF',padding:'4px',float:'right',fontSize:'18px',color:'FFFFFF',fontStyle:'normal',fontWeight:'700',width:'90px'}}>
          <span className="text-white ff-inter text-[16px] font-bold">
            Popular
          </span>
        </button>
      }
      <br />
      <br />
      <h3 style={{color:'#101828',fontStyle:'normal',fontWeight:'700',fontSize:'2rem',fontFamily:'Inter',lineHeight:'38px',marginTop:'-4%'}} className={`${x.ispopuler === "Y" ? "hoverTitle":''}`}>{title}</h3>
    </div>
      <div className="mt-2 flex items-baseline">
      {price.length > 0 ?
                price.map((priceData)=>{
                  return (
                    <span>
                      <span style={{fontFamily:'Inter',fontWeight:'700',fontSize:'1.5rem'}} className="tracking-tight hoverTitle">
                      {country === "India" ?
                      priceData.country === country && priceData.billingPeriod === planValue ?
                      parseFloat(priceData.price).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR'
                      }):null
                      :priceData.country === "United States" && priceData.billingPeriod === planValue ?
                      parseFloat(priceData.price).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      }):null}
                      </span>
                    </span>
                  )
                }) 
                :0}
        <span style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'500',fontSize:'16px',color:'#727C8D'}} className={`${x.ispopuler === "Y" ? "ml-1 month":'ml-1'}`}>/{planValue === "Monthly" ? "Month":"Year"}</span>
     </div>
      <p style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',fontSize:'14px',color:x.ispopuler === "Y" ? '#727C8D':'#727C8D'}} className="ml-1">{description}</p>
      </div>
      <hr style={{marginTop:'1.5rem'}}/>
      {x.freetrial === "Y" ? 
      <button style={{height:'46px'}} onClick={() =>getStarted(x,x.freetrial)} className="flex mt-6 w-full trial-btn py-2 bg-[#101828] rounded-[6px] justify-center items-center borderColor">
      <span className="text-white ff-inter text-[16px] font-bold">
        Start Free Trial
      </span>
      <span className="ml-1">
      <ForwordIcon />
      </span>
     </button>:
      <button style={{height:'46px'}} onClick={() =>getStarted(x,x.freetrial)} className="flex mt-6 w-full trial-btn py-2 bg-[#101828] rounded-[6px] justify-center items-center borderColor">
        <span style={{color:x.ispopuler === "Y" ? "#667085" : "#FFFFFF",}} className="text-white ff-inter text-[16px] font-bold">
          Sign Up
        </span>
        <span className="ml-1">
        {x.ispopuler === "Y" ?
        <ForwordIcon2 />:<ForwordIcon />}
        </span>
      </button>
      }
      <ul className="mt-6 space-y-4">
        {features.map((feature) =>
            feature.FeatureData.map((fea) =>
            fea.enabled === "Y" ? (
                <li key={fea.name} className="flex">
                <YesIcon2 className="svgColor" />
                <span
                    style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    lineHeight: "19px",
                    color:x.ispopuler === "Y" ? "#222428" : "#667085",
                    }}
                    className="ml-3 textColor"
                >
                    {fea.name}
                </span>
                </li>
            ) : null
            )
        )}
        </ul>
    </div>
    )
  }
  
  
  
  
  
  
  