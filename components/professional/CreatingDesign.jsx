import Image from "next/image";
import React from "react";
import { LeftArrow2 } from "../common/Icons";

const CreatingDesign = () => {
    return (
        <section className="z-0 py-12 lg:py-20">
            <div className="mx-auto px-3">
                <div className="flex justify-center">
                    <h2 className="ff-Inter font-bold leading-[35px] sm:leading-[45px]  3xl:leading-[64px] mx-[5px] sm:mx-0 md:leading-[50px] text-xl sm:text-3xl  3xl:text-[48px] text-darkBlack max-w-[427px] sm:max-w-[1200px] text-center">
                    Discover an array of offerings for your B2B App success                    
                    </h2>
                </div>
                <div className="flex justify-center mt-[15px] ">
                    <p className="ff-inter font-normal text-md  text-lightgrey max-w-[1200px] text-center">
                    We offer a wide range of specialized services tailored to your business needs, including expert configurations, seamless implementations, in-depth trainings, customized development and customization solutions, enabling you to optimize performance, streamline processes, and drive business growth
                    </p>
                </div>
                <div className="grid md:grid-cols-4 xl:grid-cols-4 gap-[30px] mt-[25px] sm:mt-[40px] 3xl:mt-[79px] pb-[40px] sm:pb-[40px] 3xl:pb-[98px]">
                    <div className="flex flex-col items-center">
                        <div style={{ height: '150px', width: '150px', border: '2px solid #C4C4C4',padding:'24px' }} className="rounded-full">
                        <img src="/images/setting-card.svg" alt="Image 1" width="91px" />
                        </div>
                        <h3 className="mt-4 pfstyle">Configurations</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <div style={{ height: '150px', width: '150px', border: '2px solid #C4C4C4' ,padding:'28px' }} className="rounded-full">
                        <img src="/images/setting-card-2.svg" alt="Image 2" width="91px" />
                        </div>
                        <h3 className="mt-4 pfstyle">Implementation</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <div style={{ height: '150px', width: '150px', border: '2px solid #C4C4C4' ,padding:'27px' }} className="rounded-full">
                        <img src="/images/setting-card-3.svg" alt="Image 3" width="91px" />
                        </div>
                        <h3 className="mt-4 pfstyle">Customization</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <div style={{ height: '150px', width: '150px', border: '2px solid #C4C4C4' ,padding:'27px' }} className="rounded-full">
                        <img src="/images/healthIcon.svg" alt="Image 4" width="91px"  />
                        </div>
                        <h3 className="mt-4 pfstyle">Trainings</h3>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default CreatingDesign;
