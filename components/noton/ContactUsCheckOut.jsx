import Image from "next/image";
import React from "react";
import { LeftArrow } from "../common/Icons";

const ContactUsCheckOut = () => {
    return (
        <div className="bg-greyshade1">
            <div className="max-w-[1120px] mx-auto px-3 xl:px-0 ">
                <div className=" flex flex-col lg:flex-row justify-between items-start pt-[20px] pb-[30px] sm:pb-[40px] sm:pt-[40px] ">
                    <div className="max-w-[450px] mx-auto lg:mx-0  w-full">
                        <Image src="/images/contact-checkout.gif" width={619} height={718} alt="Contact checkout " />
                    </div>
                    <div className="lg:pl-2 xl:pl-0 mx-auto lg:mx-0 max-w-[570px] w-full">
                        <h2 className=" text-xl md:text-3xl xl:text-9xl text-center lg:text-start sm:leading-[46px] leading-[28px] xl:leading-[52px] font-bold text-darkBlack">
                            Contact Us or Checkout our starter guide
                        </h2>
                        <p className="text-sm sm:text-md font-normal mt-[12px] sm:mt-[20px] mx-auto lg:mx-0 text-center lg:text-start max-w-[702px] leading-[22px]  sm:leading-[24px] text-lightgrey">
                            Download our starter guide to learn how you can leverage our platform to accelerate your digital transformation. We are
                            here to help. Talk to us for any queries
                        </p>
                        <div className="flex flex-col justify-center sm:justify-start items-center sm:flex-row mt-[15px] sm:mt-[20px] w-full ">
                            <input
                                className="w-full sm:w-[70%]   outline-none text-xs font-normal text-vesperviolet w-full sm:h-[60px] h-[48px] py-[12px] sm:py-[21px] pr-2 pl-[10px] sm:pl-[30px] "
                                type="email"
                                placeholder="Email Address"
                            />
                            <button
                                className=" mt-4
                             sm:mt-0 bg-darkBlack w-[191px] sm:w-[218px] h-[48px] sm:h-[60px] justify-center   text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg"
                            >
                                Send Message
                                <LeftArrow />
                            </button>
                        </div>
                        <div className="flex justify-center lg:block">
                            <button className="bg-maryblue mt-[25px] hover:scale-105 transition duration-300  ease-in-out  text-sm font-bold leading-[22px] w-[190px] sm:w-[205px] text-white h-[50px] sm:h-[55px] rounded-[50px] ">
                                Download Guide
                            </button>
                        </div>
                        <p className="text-xs text-center lg:text-start font-normal text-blueshade1 mt-[12px] sm:mt-[20px] ">
                            By clicking contact us button, you agree our terms and policy,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsCheckOut;
