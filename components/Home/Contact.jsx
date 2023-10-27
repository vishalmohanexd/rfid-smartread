import Image from "next/image";
import Script from 'next/script';
import React, { useEffect,useCallback,useState } from "react";
import { ContactArrowWhiteIcon, LeftArrow } from "../common/Icons";
import Thankyou from "../common/Thankyou";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


const Contact = (pageName) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  let currentPage = pageName.pageName
  const [formData, setFormData] = useState({
    email: '',
    howcanwehelp: '',
    pageName:currentPage
  });
  const [notification, setNotification] = useState("");
  const [submitData,setSubmitData] = useState({})
  const [visible,setVisible] = useState(false)


  useEffect(() => {

  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
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
        data:formData,
        gRecaptchaToken: gReCaptchaToken,
        secreteKey:process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          setNotification(res?.message);
          setVisible(true)
          setFormData({
            email: '',
            howcanwehelp: '',
            pageName:currentPage
          })
        } else {
          setNotification(res?.message);
        }
      });
  };

  const createLead = (data) =>{
    fetch("/api/createLead", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.message === "Lead has been generated successfully."){
        setVisible(true)
        }else{
        setVisible(false)
        }
      });

  }

  return (
    <>
      {!visible&&(
      <section className="relative bg-greyshade1 pt-28 mt-16 sm:mt-[80px] 3xl:mt-[94px] pb-20 xl:py-32">
        <ContactArrowWhiteIcon />
        <div className="container px-3 mx-auto flex flex-col xl:flex-row items-center justify-between">
          <div className="w-full xl:w-[45%] mr-aut hidden lg:block">
            <Image
              src="/images/contact-image.png"
              alt="contact-image"
              width={637}
              height={529}
            />
          </div>
          <div className="w-full xl:w-[50%]">
            {" "}
            <h2 className="text-darkBlack ff-Inter text-[36px] sm:text-3xl font-bold sm:leading-[64px]">
              We are here for you
            </h2>
            <p className="text-lightgrey text-sm sm:text-md ff-inter my-3">
              You can always reach out to us and our strong support team is ever
              ready to help you solve your queries.
            </p>

            <div className="w-full xl:w-[45%] mr-aut lg:hidden">
            <Image
              src="/images/contact-image.png"
              alt="contact-image"
              width={637}
              height={529}
            />
          </div>

            <form onSubmit={handleSumitForm}  method="POST" className="mt-8">
              <input
                className="w-full h-[45px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                required
                type="email"
                placeholder="Your email"
                value={formData.email}
                id="email"
                name="email"
                onChange={handleChange}
              />
              <textarea
                className="mt-5 w-full px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                required
                cols="30"
                rows="6"
                placeholder="Your message"
                id="howcanwehelp"
                name="howcanwehelp"
                value={formData.howcanwehelp}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="mt-5 bg-blue px-6 xl:px-10 py-3 xl:py-4 rounded-full  text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg">
                Send Message
                <LeftArrow />
              </button>
              <p className="font-normal text-center lg:text-start mt-6 ff-inter text-1xs text-blueshade1">
              By clicking on 'Send Message' button, you agree to our <a style={{textDecoration:'underline',cursor:'pointer'}} href="/info#terms">Terms & Policy</a>
            </p>
            </form>
          </div>
        </div>
      </section>
      )}
      {visible&&(
      <Thankyou />
      )}
    </>
  );
};

export default Contact;
