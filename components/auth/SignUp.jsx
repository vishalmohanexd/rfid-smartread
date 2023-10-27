import Image from "next/image";
import React from "react";
import { LeftArrow } from "../common/Icons";

const SignUp = () => {
  return (
    <>
      <section className="bg-blue py-10 sm:py-12">
        <div className="container px-3 mx-auto">
          <h2 className="text-white ff-inter text-[36px] sm:text-3xl font-bold sm:leading-[64px] text-center mb-3">
            Sign up for your free trial
          </h2>
          <h6 className="ff-natosans text-[18px] sm:text-md text-[#F9FAFB] text-center  mb-6">
            Unleash the full potential of your enterprise - Sign up and see the
            difference
          </h6>
          <div className="mx-auto max-w-md">
            <input
              className="mb-4 w-full h-[55px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
              required
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="mb-4 w-full h-[55px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
              required
              type="email"
              placeholder="Your email"
            />
            <input
              className="mb-4 w-full h-[55px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
              required
              type="tel"
              placeholder="Phone number"
            />
            <input
              className="mb-4 w-full h-[55px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
              required
              type="text"
              placeholder="Company name"
            />

            <button className="flex items-center justify-center mb-4 w-full h-[60px] sm:h-[66px] px-4 py-2 text-white bg-[#91C507] text-[18px] ff-inter font-bold outline-none free-trial-btn-hover transition-all duration-200 ease-in rounded-[4px] hover:shadow-md hover:shadow-[#91C507]">
              Send OTP via Email <LeftArrow />
            </button>

            <button className="flex items-center justify-center mb-4  w-full h-[60px] sm:h-[66px] px-4 py-2 text-white bg-darkBlack text-[18px] ff-inter font-bold outline-none free-trial-btn-hover transition-all duration-200 ease-in rounded-[4px] hover:opacity-70">
              <Image
                className="mr-3"
                src="/images/google-logo.png"
                width={27}
                height={27}
                alt="Google"
              />{" "}
              Sign Up with Google
            </button>
            <p className="text-xs ff-natosans text-[#667085] text-center">
              Please refer to our{" "}
              <a href="/privacy-policy" className="text-[#508FDA]">
                {" "}
                Privacy Policy
              </a>{" "}
              for more details
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
