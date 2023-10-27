/*eslint-disabled*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ForwordIcon } from "./Icons";
import { TickMark } from "./Icons";
import { useRouter } from "next/router";
import PricingCard from "./pricingCard";

const PlanPricing2 = ({ plan, pricingPlans23, isBestPlan, clicked, email }) => {
  const router = useRouter();
  const [country, setCountry] = useState(null);
  const [pricingPlans2, setPricingPlans] = useState(
    pricingPlans23 === undefined || pricingPlans23 === null
      ? {}
      : pricingPlans23
  );
const name=router.query.pospricing
  const [loading, setLoading] = useState(false);
  let planValue = plan === 1 ? "Monthly" : "Yearly";

  useEffect(() => {
    fetch(`https://get.geojs.io/v1/ip/geo.json`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country);
      });
  }, []);

  useEffect(() => {
    if (clicked === true) {
      const currentUrl = router.asPath;
      router.push(`${currentUrl}#features`);
    }
  }, [clicked]);

  const getStarted = (x, freetrial) => {
    let preferenceId = null;
    let newPrice = null;

    for (let index = 0; index < x.pricing.length; index += 1) {
      const country1 = x.pricing[index].country;
      const billingPeriod = x.pricing[index].billingPeriod;
      if (country === "India") {
        if (country1 === country && planValue === billingPeriod) {
          preferenceId = x.pricing[index].preferenceId;
          newPrice = x.pricing[index];
        }
      } else {
        if (country1 === "United States" && planValue === billingPeriod) {
          preferenceId = x.pricing[index].preferenceId;
          newPrice = x.pricing[index];
        }
      }
    }
    if (newPrice) {
      window.open(
        `${
          process.env.NEXT_PUBLIC_Auth
        }sign-up/?planId=${preferenceId}&freeTrial=${freetrial}&country=${country}&username=${
          email === undefined || email === "" || email === null ? "" : email
        }`,
        "_blank"
      );
    }
  };

  const gotoContact = () => {
    router.push("/resources/contact");
  };

  const planCount =
    Object.keys(pricingPlans2).length === 0 ? 0 : pricingPlans2.plan.length;
  let finalCount = 0;
  if (planCount > 0) {
    finalCount = isBestPlan === true ? planCount - 1 : planCount;
  }
  const numPlans = finalCount;
  const isSinglePlan = numPlans === 1;
  return (
    <div>
      <div
        className="flex justify-center"
        style={{ marginLeft: "4%", marginRight: "4%" }}
      >
        <div
          className={`grid ${
            isSinglePlan ? "grid-cols-1" : "md:grid-cols-2"
          } sm:grid-cols-2 lg:grid-cols-${
            numPlans > 4 ? 4 : numPlans
          } xl:grid-cols-${numPlans > 4 ? 4 : numPlans} gap-4 my-8`}
        >
          {Object.keys(pricingPlans2).length === 0
            ? null
            : pricingPlans2.plan.map((x, index) => {
                return index === 0 ? null : (
                  <div key={x.name} className="w-full">
                    <PricingCard
                      title={x.name}
                      price={x.pricing}
                      features={x.features}
                      index={index}
                      plan_id={x.plan_id}
                      planValue={planValue}
                      country={country}
                      description={x.description}
                      x={x}
                      email={email}
                    />
                  </div>
                );
              })}
          <div
            style={
              isBestPlan === true ? { display: "none" } : { display: "block" }
            }
            className="w-full"
          >
            <div
              style={{
                borderRadius: "16px",
                border: "1px solid #E8E8E8",
                boxShadow: "4px 6px 21px rgba(0, 0, 0, 0.1)",
                maxWidth: "300px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              className="border-gray-200 rounded-md shadow-sm p-6"
            >
              <div style={{ height: "185px", overflow: "hidden" }}>
                <div>
                  <br />
                  <br />
                  <h3
                    style={{
                      color: "#101828",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "2rem",
                      fontFamily: "Inter",
                      lineHeight: "38px",
                      marginTop: "-4%",
                    }}
                  >
                    Enterprise
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#727C8D",
                    marginTop: "8px",
                  }}
                  className="ml-1 textColor"
                >
                  Contact sales for custom pricing <br />
                  Tailored for Excellence: Customized & Comprehensive Business
                  Tools
                </p>
              </div>
              <hr style={{ marginTop: "1.5rem" }} />
              <button
                style={{ height: "46px" }}
                onClick={gotoContact}
                className="flex mt-6 w-full trial-btn py-2 bg-[#101828] rounded-[6px] justify-center items-center"
              >
                <span className="text-white ff-inter text-[16px] font-bold">
                  Contact Us
                </span>
                <span className="ml-1">
                  <ForwordIcon />
                </span>
              </button>
              <ul className="mt-6 space-y-4" style={{ textAlign: "center" }}>
                <li key="kk" className="flex">
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      fontSize: "15px",
                      lineHeight: "19px",
                      color: "#667085",
                    }}
                    className="textColor"
                  >
                    Customizable to meet specific business requirements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div
          id="features"
          style={
            isBestPlan === true
              ? { display: "none" }
              : { display: "show", paddingTop: "100px" }
          }
          className="flex justify-center"
        >
          <div
            style={{ flexBasis: "250px", borderBottom: "1px solid #DADADA" }}
            className="hidden lg:block"
          >
            <div className="h-[190px] ">
              <div className="flex flex-col justify-center">
                <div className="px-5 mt-6" style={{ paddingLeft: "0px" }}>
                  <h3
                    style={{
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#101828",
                    }}
                    className="mt-[100px] text-[20px] ff-Inter"
                  >
                    {name}
                  </h3>
                </div>
              </div>
            </div>
            {Object.keys(pricingPlans2).length === 0
              ? null
              : pricingPlans2.plan[0].features.map((plandata, index) => (
                  <div key={plandata.FeatureGroupName}>
                    <div
                      style={{
                        borderTop: "1px solid #DADADA",
                        fontWeight: "600",
                        fontStyle: "normal",
                      }}
                      className="h-[60px]  text-[#0C173A]  flex items-center text-[18px] ff-Inter"
                    >
                      {plandata.FeatureGroupName}
                    </div>
                    {plandata.FeatureData.map((featurNames, index) => {
                      const isLastIndex =
                        index === plandata.FeatureData.length - 1;
                      return (
                        <div
                          key={featurNames.name}
                          style={{ borderTop: "1px solid #DADADA" }}
                          className="h-[60px] ff-inter text-[#0C173A] flex  text-[16px] items-center"
                        >
                          {featurNames.name}
                        </div>
                      );
                    })}
                  </div>
                ))}
          </div>
          {Object.keys(pricingPlans2).length === 0
            ? null
            : pricingPlans2.plan.map((x, index) => {
                return index === 0 ? null : (
                  <div
                    key={index}
                    style={{
                      flexBasis: "250px",
                      borderBottom: "1px solid #DADADA",
                    }}
                  >
                    <div
                      className="h-[190px]"
                      style={{
                        backgroundColor:
                          x.ispopuler === "Y" ? "#E4EAFA" : "white",
                        borderTopRightRadius: "16px",
                        borderTopLeftRadius: "16px",
                      }}
                    >
                      <div className="flex flex-col justify-center">
                        <h3
                          style={{
                            fontWeight: "600px",
                            fontStyle: "normal",
                            color: "#101828",
                            backgroundColor:
                              x.ispopuler === "Y" ? "#E4EAFA" : "white",
                          }}
                          className="text-center mt-[45px] text-[24px] ff-Inter"
                        >
                          {x.name}
                        </h3>
                        <div
                          className="px-5 mt-6"
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{ width: "110px", height: "46px" }}
                            onClick={() => getStarted(x, x.freetrial)}
                            className=" w-full trial-btn py-2 bg-[#2F3856] rounded-[6px] justify-center items-center"
                          >
                            <span
                              style={{ fontStyle: "normal" }}
                              className="text-white ff-inter text-[16px] font-bold"
                            >
                              Sign up
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {x.features.map((xfeatures, index) => {
                      const isLastIndex = index === x.features.length - 1;
                      return (
                        <>
                          <div
                            style={{
                              borderTop: "1px solid #DADADA",
                              backgroundColor:
                                x.ispopuler === "Y" ? "#E4EAFA" : "white",
                            }}
                            className="h-[60px] justify-center text-[#101828]  flex items-center text-[14px] ff-Inter font-bold"
                          ></div>
                          {xfeatures.FeatureData.map((xfeaturesEnabled) => (
                            <div
                              style={{
                                borderTop: "1px solid #DADADA",
                                backgroundColor:
                                  x.ispopuler === "Y" ? "#E4EAFA" : "white",
                              }}
                              className="h-[60px] ff-inter text-[#1D2939] flex justify-center text-[16px] items-center"
                            >
                              {xfeaturesEnabled.enabled === "Y" ? (
                                <TickMark />
                              ) : null}
                            </div>
                          ))}
                        </>
                      );
                    })}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default PlanPricing2;
