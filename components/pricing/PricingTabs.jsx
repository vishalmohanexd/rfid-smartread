import React from "react";
import Link from "next/link";
import Router from 'next/router';



const PricingTabs = ({subscriptionApps,email,country}) => {
  const getpricing = (id) =>{
    Router.push({
      pathname: `/apps/pricing/${id}`,
      query: { email: email === undefined || email === null ? "":email }
    })
  }

  return (
    <>
      <div style={{maxWidth:'1280px'}} className="mx-auto px-3">
        <div className="flex flex-wrap items-center justify-between my-5">
          {subscriptionApps?.map((res)=>{
            return  (
              <div
                key={res.product_id}
                onClick={()=>getpricing(res.product_id)}
                style={{marginBottom:"1.5rem",cursor:'pointer'}}
                className="mb-30 xl:mb-0 flex flex-col justify-between min-h-[250px] max-h-[250px] w-full lg:w-[48%] xl:w-[32%] px-5 py-6 border-[#CDCDCD] border-[1px] rounded-[17px] transition-all duration-200 ease-in  hover:shadow-lg  "
              >
                <div>
                  <div className="mb-4 flex items-center">
                    <h3 className="text-[#5872C7] text-[25px] font-semibold ff-inter">
                      {res.name}
                    </h3>
                    <svg
                      className="ml-3"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1379_7895)">
                        <path
                          d="M10.5458 3.14384L7.85625 0.454345C7.64521 0.243399 7.35901 0.12493 7.06061 0.125C6.76222 0.12507 6.47607 0.243674 6.26513 0.45472C6.05418 0.665766 5.93571 0.951966 5.93578 1.25036C5.93585 1.54875 6.05446 1.8349 6.2655 2.04584L8.09475 3.87509H1.5C1.20163 3.87509 0.915484 3.99362 0.704505 4.2046C0.493527 4.41558 0.375 4.70173 0.375 5.00009C0.375 5.29846 0.493527 5.58461 0.704505 5.79559C0.915484 6.00657 1.20163 6.12509 1.5 6.12509H8.09475L6.2655 7.95434C6.05446 8.16529 5.93585 8.45144 5.93578 8.74983C5.93571 9.04822 6.05418 9.33442 6.26513 9.54547C6.47607 9.75651 6.76222 9.87512 7.06061 9.87519C7.35901 9.87526 7.64521 9.75679 7.85625 9.54584L10.5458 6.85634C11.0372 6.36357 11.3131 5.69603 11.3131 5.00009C11.3131 4.30416 11.0372 3.63662 10.5458 3.14384Z"
                          fill="#5872C7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1379_7895">
                          <rect width="12" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p style={{fontWeight:'300',fontStyle:'normal'}} className="text-[#101828] ff-inter mb-8">
                    {res.description}
                  </p>
                </div>
                <span className="text-[#101828] font-medium ff-inter text-[16px]">
                  Starts from {country === "India" ? parseFloat(res.price).toLocaleString("en-IN", { style: "currency", currency: "INR" }):parseFloat(res.price).toLocaleString("en-US", { style: "currency", currency: "USD" })}/month
                </span>
              </div>
            )    
           })}
        </div>
      </div>
    </>
  );
};

export default PricingTabs;
