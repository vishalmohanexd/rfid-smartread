import Image from "next/image";
import React from "react";

const DragDropApp = () => {
    return (
        <div>
            <div className="max-w-[1120px] px-3 3xl:px-0 mx-auto mt-[50px] sm:mt-[52px]">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex-1 lg:max-w-[590px] p-5 mt-5 lg:mt-0 w-full">
                        <Image src="/images/price-connect2.webp" width={630} height={772} alt="create app img" />
                    </div>
                    <div className="flex-1 lg:max-w-[590px] p-5 mt-5 lg:mt-0 w-full">
                        <div className="flex justify-center lg:justify-start">
                            <h2 className="ff-inter font-bold sm:text-[46px] text-xl text-darkBlack leading-[28px] sm:leading-[64px] text-center lg:text-start max-w-[667px] ">
                            Leverage the power of AI with Price Connect 
                            </h2>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-[18px] text-lightgrey max-w-[702px] mt-[11px] sm:mt-[22px]">
                            Price  Connect  offers a unique solution that leverages the power of AI and data analytics to deliver precise competitor price analysis and dynamic pricing suggestions for you
                            </p>
                        </div>
                        <div className="border-t-2 mt-4 sm:mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
                        <div className="flex justify-center xl:justify-start">
                            <div className="mt-4 sm:mt-[25px] grid sm:grid-cols-2 gap-[20px] lg:gap-[10px] xl:gap-[15px] xl:gap-x-[25px]">
                                <div className="max-w-[325px]">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Competitor Price Analysis</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                    Analyze your competitor's pricing in real time and understand your market positioning
                                    </p>
                                </div>
                                <div className="max-w-[325px] mt-[15px] md:mt-[0px]">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Dynamic Pricing</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey ">
                                    Utilize advanced AI algorithms to continuously analyze various factors and suggest optimal prices
                                    </p>
                                </div>
                                <div className=" max-w-[325px] mt-[15px] ">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Seamless Integration</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                    Effortlessly integrate with your existing POS and eCommerce systems for smooth flow of data and decision making
                                    </p>
                                </div>
                                <div className=" max-w-[325px] mt-[15px] ">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Market Trend Analysis</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                    Stay ahead of the curve with market trends insights, enabling swift adjustments to your pricing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragDropApp;
