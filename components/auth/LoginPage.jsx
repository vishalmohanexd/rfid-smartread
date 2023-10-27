import Image from "next/image";
import React from "react";
import { LeftArrow } from "../common/Icons";

const LoginPage = () => {
  return (
    <>
      <section className="bg-blue py-10 sm:py-14 h-screen flex items-center justify-center">
        <div className="container px-3 mx-auto">
          <div className="flex  justify-center items-center mb-8">
            <Image
              src="/images/logo-white-cwsuite.png"
              width={216}
              height={31}
              alt="LOGO"
            />
          </div>
          <div className="mx-auto max-w-md">
            <input
              className="mb-4 w-full h-[55px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
              required
              type="email"
              placeholder="Email"
            />
            <input
              className="mb-4 w-full h-[55px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
              required
              type="password"
              placeholder="Password"
            />
            <button className="flex items-center justify-center mb-4  w-full h-[60px] sm:h-[66px] px-4 py-2 text-white bg-[#91C507] text-[18px] ff-Inter font-bold outline-none free-trial-btn-hover transition-all duration-200 ease-in rounded-[4px] hover:shadow-md hover:shadow-[#91C507]">
              Login <LeftArrow />
            </button>
            <button className="flex items-center justify-center mb-4 w-full h-[60px] sm:h-[66px] px-4 py-2 text-white bg-darkBlack text-[18px] ff-Inter font-bold outline-none free-trial-btn-hover transition-all duration-200 ease-in rounded-[4px] hover:opacity-70">
              <Image
                className="mr-3"
                src="/images/google-logo.png"
                width={27}
                height={27}
                alt="Google"
              />{" "}
              Continue with Google
            </button>
            <a
              href="/forgot-password"
              className="text-[#508FDA] text-xs ff-natosans block"
            >
              {" "}
              Forgot password
            </a>{" "}
            <p className="text-xs ff-natosans text-[#667085] text-center mt-2">
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

export default LoginPage;
