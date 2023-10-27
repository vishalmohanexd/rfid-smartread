import Image from "next/image";
import React from "react";

const YourProductivity = () => {
    return (
        <div>
            <div className="max-w-[1200px] w-full mx-auto px-3 xl:px-0 sm:mt-[50px] mt-[40px] md:mt-[85px]">
                <h2 className="text-xl sm:text-2xl md:text-6xl leading-[26px] sm:leading-[40px] md:leading-[44px] text-darkBlack -tracking-1 font-semibold text-center">
                    Discover the benefits of Composer to boost your productivity
                </h2>
                <p className="text-base sm:text-lg mt-[15px] sm:mt-[26px] font-normal text-lightgrey max-w-[743px] mx-auto text-center">
                    Accelerate development, empower collaboration: Unleash your potential with Low Code
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[10px] 2xl:gap-[21px] max-w-[700px] mx-auto lg:max-w-[1120px] mt-[20px] sm:mt-[40px] 3xl:mt-[65px]  lg:pb-[120px]  xl:pb-[120px]">
                    <div className="bg-[rgba(96,192,176,0.58)] px-2 xl:px-0 rounded-[16px] z-0 hover:scale-90  transition-all lg:h-[355px]   ease-in hover:duration-200  relative">
                        <div className=" pt-[25px] lg:pt-[55px]">
                            <h3 className=" font-bold text-center text-lg sm:text-[26px] text-darkBlack  leading-[32px] ">Simplicity at Its Core </h3>
                            <p className=" font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] p-2">
                            Our user-friendly interface and intuitive drag-and-drop functionality make it easy for anyone to design and deploy retail enterprise apps
                            </p>
                        </div>
                        <div className="bg-grey my-5 lg:my-0 lg:pt-[23px] mx-auto max-w-[300px] rounded-[16px] py-[15px] lg:pb-[30px] px-[15px]">
                            <Image src="/images/agile-development-img.png" width={358} height={345} alt="agile development img" />
                        </div>
                    </div>
                    <div className="bg-englishchannelfog px-2 xl:px-0 rounded-[16px] z-0 hover:scale-90  transition-all lg:h-[355px]   ease-in hover:duration-200  relative">
                        <div className=" pt-[25px] lg:pt-[55px]">
                            <h3 className=" font-bold text-center text-lg sm:text-[28px] text-darkBlack  leading-[32px] ">Insightful Automation </h3>
                            <p className=" font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] ">
                            Composer uses cutting-edge AI technology to translate your user inputs into meaningful, actionable insights, automatically generating reports and KPIs
                            </p>
                        </div>
                        <div className="bg-ambrosiaivory my-5 lg:my-0 py-[15px] lg:pt-[23px] mx-auto max-w-[300px] rounded-[16px] lg:pb-[30px] px-[15px]">
                            <Image src="/images/promotes-innovation-img.png" width={358} height={345} alt="promotes-innovation-img" />
                        </div>
                    </div>
                    <div className="bg-skyblue px-2 xl:px-0 rounded-[16px] z-0 hover:scale-90  transition-all lg:h-[355px]   ease-in hover:duration-200  relative">
                        <div className=" pt-[25px] lg:pt-[55px]">
                            <h3 className=" font-bold text-center text-lg sm:text-[26px] text-darkBlack  leading-[32px] ">Efficient Data Management</h3>
                            <p className=" font-normal lg:h-[74px] px-1 text-xs text-lightgrey max-w-[396px] mx-auto text-center mt-[9px] sm:mt-[18px] ">
                            Composer ensures real-time, efficient data flow management, allowing you to keep a pulse on your business operations on the go
                            </p>
                        </div>
                        <div className="bg-englishchannelfog my-5 lg:my-0 py-[15px] lg:pt-[23px] mx-auto max-w-[300px] rounded-[16px] lg:pb-[30px] px-[15px]">
                            <Image src="/images/lower-maintenance-img.png" width={358} height={345} alt="lower-maintenance-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourProductivity;
