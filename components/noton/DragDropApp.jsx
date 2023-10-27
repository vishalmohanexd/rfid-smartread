import Image from "next/image";
import React from "react";

const DragDropApp = () => {
    return (
        <div>
            <div className="max-w-[1120px] px-3 3xl:px-0 mx-auto mt-[40px] sm:mt-[52px]">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="max-w-[300px] sm:max-w-[400px] xl:max-w-[450px]">
                        <Image src="/images/create-app-img.png" width={630} height={772} alt="create app img" />
                    </div>
                    <div className="lg:max-w-[590px] mt-5 lg:mt-0 w-full">
                        <div className="flex justify-center lg:justify-start">
                            <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[64px] text-center lg:text-start max-w-[667px] ">
                            Unleash the Power of Composable Commerce
                            </h2>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[22px]">
                            Composer embraces the power of composable commerce, providing you with the tools to construct your perfect retail solution, tailored to your unique business needs
                            </p>
                        </div>
                        <div className="border-t-2 mt-4 sm:mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
                        <div className="flex justify-center xl:justify-start">
                            <div className="mt-4 sm:mt-[25px] grid sm:grid-cols-2 gap-[20px] lg:gap-[10px] xl:gap-[15px]">
                                <div className="max-w-[325px]">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Intuitive Drag-Drop Functionality</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                        Simply drag components onto the page to create forms, dashboards, reports and much more
                                    </p>
                                </div>
                                <div className="max-w-[325px] mt-[15px] md:mt-[0px]">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Smart Automation</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey ">
                                        Automate simple, few page apps to complex enterprise-wide applications
                                    </p>
                                </div>
                                <div className=" max-w-[325px] mt-[15px] ">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Effortless Deployment</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                        Various deployment options including cloud-based, on-premise and hybrid
                                    </p>
                                </div>
                                <div className=" max-w-[325px] mt-[15px] ">
                                    <div className="flex items-center">
                                        <Image width={25} height={18} src="/images/posmainIcon.png" alt="pos main icon" />
                                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">Seamless Integration</p>
                                    </div>
                                    <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                                        Easy integration with existing systems and external data by just copying and pasting APIs
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
