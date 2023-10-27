import Image from "next/image";
import React from "react";

const YourProductivity = () => {
    return (
        <div>
            <div className="max-w-[1200px] w-full mx-auto px-3 xl:px-0 sm:mt-[50px] mt-[40px] md:mt-[85px]">
                <h2 className="text-xl sm:text-2xl md:text-6xl leading-[26px] sm:leading-[40px] md:leading-[44px] text-darkBlack -tracking-1 font-semibold text-center">
                Why Price Connect ?
                </h2>
                <p className="text-base sm:text-[21px] mt-[15px] sm:mt-[26px] font-normal text-lightgrey max-w-[100%] mx-auto text-center">
                With a one-time cost per competitor site,Price Connect  offers an effective solution that's both affordable and invaluable. Our transparent pricing model includes product data mapping, daily competitor site crawling, and OpenAI API integration
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[10px] 2xl:gap-[21px] max-w-[700px] mx-auto lg:max-w-[1120px] mt-[20px] sm:mt-[40px] 3xl:mt-[65px]  lg:pb-[120px]  xl:pb-[120px]">
                    <div className="bg-[rgba(96,192,176,0.58)] px-2 xl:px-0 rounded-[16px] z-0 hover:scale-90  transition-all lg:h-[355px]   ease-in hover:duration-200  relative">
                        <div className=" pt-[25px] lg:pt-[55px]">
                            <h3 className=" font-bold text-center text-lg sm:text-[26px] text-darkBlack  leading-[32px] ">Strategic Partnership </h3>
                            <p className=" font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] p-2">
                            More than just a tool, Price Connect  serves as your strategic ally in navigating the retail landscape
                            </p>
                        </div>
                        <div className="bg-[#EAF2FF] my-5 lg:my-0 lg:pt-[23px] mx-auto max-w-[300px] rounded-[16px] py-[15px] lg:pb-[30px] px-[15px]">
                            <Image src="/images/robust-partanership.webp" width={358} height={345} alt="agile development img" />
                        </div>
                    </div>
                    <div className="bg-englishchannelfog px-2 xl:px-0 rounded-[16px] z-0 hover:scale-90  transition-all lg:h-[355px]   ease-in hover:duration-200  relative">
                        <div className=" pt-[25px] lg:pt-[55px]">
                            <h3 className=" font-bold text-center text-lg sm:text-[28px] text-darkBlack  leading-[32px] ">Robust Technology </h3>
                            <p className=" font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] ">
                            Leveraging AI and cutting-edge technologies,Price Connect  provides reliable and actionable insights
                            </p>
                        </div>
                        <div className="bg-[#97ABEE] my-5 lg:my-0 py-[15px] lg:pt-[23px] mx-auto max-w-[300px] rounded-[16px] lg:pb-[30px] px-[15px]">
                            <Image src="/images/robust-technology.webp" width={358} height={345} alt="promotes-innovation-img" />
                        </div>
                    </div>
                    <div className="bg-skyblue px-2 xl:px-0 rounded-[16px] z-0 hover:scale-90  transition-all lg:h-[355px]   ease-in hover:duration-200  relative">
                        <div className=" pt-[25px] lg:pt-[55px]">
                            <h3 className=" font-bold text-center text-lg sm:text-[26px] text-darkBlack  leading-[32px] ">User-Friendly Interface</h3>
                            <p className=" font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] ">
                            Designed with usability in mind, Price Connect  offers an intuitive experience that simplifies complex pricing challenges
                            </p>
                        </div>
                        <div className="bg-[#FFF0F0] my-5 lg:my-0 py-[15px] lg:pt-[23px] mx-auto max-w-[300px] rounded-[16px] lg:pb-[30px] px-[15px]">
                            <Image src="/images/user-frd-experience.webp" width={358} height={345} alt="lower-maintenance-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourProductivity;
