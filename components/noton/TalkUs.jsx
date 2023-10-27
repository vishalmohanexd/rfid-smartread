import Image from "next/image";
import Script from "next/script";
import React, { useEffect, useCallback, useState } from "react";
import { LeftArrow } from "../common/Icons";
import Thankyou from "../common/Thankyou";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const TalkUs = (pageName) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  let currentPage = pageName.pageName;
  const [formData, setFormData] = useState({
    email: "",
    howcanwehelp: "",
    pageName: currentPage,
  });
  const [notification, setNotification] = useState("");
  const [submitData, setSubmitData] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        setSubmitData(formData);
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha, formData]
  );

  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: formData,
        gRecaptchaToken: gReCaptchaToken,
        secreteKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          setNotification(res?.message);
          setVisible(true);
          setFormData({
            email: "",
            howcanwehelp: "",
            pageName: currentPage,
          });
        } else {
          setNotification(res?.message);
        }
      });
  };

  const createLead = (data) => {
    fetch("/api/createLead", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Lead has been generated successfully.") {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
  };

  return (
    <>
      {!visible && (
        <div className="bg-greyshade1 pt-10 pb-4">
          <div className="container flex flex-col lg:flex-row justify-between items-center px-3 mx-auto">
            <div className="w-full lg:w-[35%]">
              <div className="hidden lg:block mt-[15px] lg:mt-0 flex justify-center lg:justify-start">
                <Image
                  src="/images/contactUs.webp"
                  width={526}
                  height={610}
                  alt="talk us img"
                />
              </div>
            </div>

            <div className="w-full lg:w-[60%] ">
              <div className="flex justify-center flex-col">
                <h2 className="font-bold ff-Inter sm:text-3xl text-2xl md:text-[48px] text-center lg:text-start text-darkBlack">
                  Contact Us or
                </h2>
                <h2 className="font-bold ff-Inter sm:text-3xl text-2xl md:text-[48px] text-center lg:text-start text-darkBlack">
                  Checkout our starter guide
                </h2>

                <p className="font-normal mt-[12px] sm:mt-5 text-center lg:text-start  text-sm sm:text-md  text-lightgrey ff-inter max-w-[702px]">
                  Download our starter guide to learn how you can leverage our
                  platform to accelerate your digital transformation. We are
                  here to help. Talk to us for any queries
                </p>
                <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
                  <div className="lg:hidden flex justify-center">
                    <Image
                      src="/images/talk-us-1.png"
                      width={526}
                      height={610}
                      alt="talk us img"
                    />
                  </div>
                </div>
                <form onSubmit={handleSumitForm} method="POST" className="mt-8">
                  {/* <div className="flex">
                  <input
                    className="w-full h-[45px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="bg-[#101828]  xl:py-4 text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg"
                  >
                    Send Message
                    <LeftArrow />
                  </button>

                  </div> */}
                  <div className="flex items-center">
                    <input
                      className="w-full h-[45px] sm:h-[50px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      id="email"
                      name="email"
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="h-[45px] sm:h-[50px] bg-[#101828] px-6 xl:px-10 py-3 xl:py-4 text-white text-sm flex items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg whitespace-nowrap"
                    >
                      Send Message
                      <LeftArrow />
                    </button>
                  </div>

                  <button
                      type="submit"
                      className=" mt-4 h-[45px] sm:h-[50px] bg-[#006D77] rounded-full px-6 xl:px-10 py-3 xl:py-4 text-white text-sm flex items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg whitespace-nowrap"
                    >
                      Download Guide
                      
                    </button>

                  <p className="font-normal text-center lg:text-start mt-6 ff-inter text-1xs text-blueshade1">
                    By clicking contact us button, you agree our terms and
                    policy,
                    {/* <a
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      href="/info#terms"
                    >
                      Terms & Policy
                    </a> */}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {visible && <Thankyou />}
    </>
  );
};

export default TalkUs;
