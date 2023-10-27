import Image from "next/image";
import React from "react";
import { turstedLeadingCompaniesData } from "../common/Helper";

const TrustedLeadingCompanies = () => {
    return (
        <div>
            <div className="max-w-[1120px] mx-auto px-3 2xl:px-0 sm:mt-[70px] mt-[40px] md:mt-[131px]">
                <h2 className=" text-xl sm:text-2xl font-bold text-darkBlack leading-[26px] sm:leading-[38px] text-center ">
                    Trusted by the world’s leading companies
                </h2>
                <div className="flex justify-around items-center flex-wrap sm:mt-[11px]">
                    {turstedLeadingCompaniesData.map((item, index) => (
                        <div key={index} className="max-w-[142px] sm:max-w-[200px] lg:max-w-[200px] pr-1 sm:pr-2 mt-[20px] 2xl:mt-[32px] w-full">
                            <img src={item.img} alt="leading companies" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedLeadingCompanies;
