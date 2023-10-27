import Image from "next/image";
import React from "react";
import { managementData2 } from "../common/Helper";

const Tablesupervision = () => {
  return (
    <section className="lg:mt-[70px]">
      <div className="container mx-auto z-0 px-3  bg-skyblue rounded-[58px] relative">
        <div className="absolute top-0 right-[-30px] top-[20px] z-[1] hidden lg:block">
          <Image
            src="/images/group-img.png"
            width={102}
            height={102}
            alt="management img"
          />
        </div>
        <div>
          <div className="max-w-[1120px] 3xl:px-0 mx-auto mt-[40px]  sm:mt-[52px]">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="lg:max-w-[590px] mt-5 pt-6 lg:mt-0 w-full mb-[160px] hidden lg:block">
                <div className="flex justify-center lg:justify-start">
                  <div className="ff-inter font-bold sm:text-xl text-xl text-darkBlack leading-[18px] sm:leading-[64px] text-center lg:text-start max-w-[667px] ">
                    <div className="max-w-[500px] mt-9 mx-auto lg:mx-0 lg:mt-0 lg:pl-2 xl:pl-0">
                      <div className="hidden lg:block">
                        <Image
                          className="absolute"
                          style={{ zIndex: 0, width: "500px" }}
                          src="/images/Table-supervision3.webp"
                          width={435}
                          height={160}
                          alt="invoicing pricing img"
                        />
                        <Image
                          className="relative"
                          style={{
                            top: 250,
                            left: 40,
                            width: "276px",
                            height: "200px",
                          }}
                          src="/images/Table-supervision1.webp"
                          width={600}
                          height={660}
                          alt="invoicing pricing img"
                        />
                        <Image
                          className="relative"
                          style={{
                            top: 150,
                            left: 270,
                            width: "230px",
                            height: "143px",
                          }}
                          src="/images/Table-supervision2.webp"
                          width={600}
                          height={660}
                          alt="invoicing pricing img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:max-w-[590px] mt-5 p-6 lg:mt-0 w-full">
                <div className="flex justify-center lg:justify-start">
                  <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[64px] text-center lg:text-start max-w-[667px] ">
                    Table Supervision
                  </h2>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[22px]">
                    Enhance customer experience and maximize seating capacity
                    with our intuitive table management system for seamless
                    reservation and seating arrangements.
                  </p>
                </div>
                <div className="border-t-2 mt-4 sm:mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
                <div className="flex justify-center xl:justify-start">
                  <div className="mt-4 sm:mt-[25px] grid sm:grid-cols-2 gap-[20px] lg:gap-[10px] xl:gap-[15px]">
                    <div className="max-w-[325px]">
                      <div className="flex items-center">
                        <Image
                          width={25}
                          height={18}
                          src="/images/posmainIcon.png"
                          alt="pos main icon"
                        />
                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                          Manage table assignments
                        </p>
                      </div>
                      <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                        Effortlessly manage table assignments and wait times
                        with real-time updates
                      </p>
                    </div>
                    <div className="max-w-[325px] mt-[15px] md:mt-[0px]">
                      <div className="flex items-center">
                        <Image
                          width={25}
                          height={18}
                          src="/images/posmainIcon.png"
                          alt="pos main icon"
                        />
                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                          Wait times
                        </p>
                      </div>
                      <p className="font-normal mt-3 ff-inter text-base text-lightgrey ">
                        Minimize customer wait times with our optimized queuing
                        and waitlist management system, improving operational
                        efficiency
                      </p>
                    </div>
                    <div className=" max-w-[325px] mt-[15px] ">
                      <div className="flex items-center">
                        <Image
                          width={25}
                          height={18}
                          src="/images/posmainIcon.png"
                          alt="pos main icon"
                        />
                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                          Reservations
                        </p>
                      </div>
                      <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                        Manage reservations with our intuitive reservation
                        management system, ensuring smooth bookings.
                      </p>
                    </div>
                    <div className=" max-w-[325px] mt-[15px] ">
                      <div className="flex items-center">
                        <Image
                          width={25}
                          height={18}
                          src="/images/posmainIcon.png"
                          alt="pos main icon"
                        />
                        <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                          View real-time table statuses
                        </p>
                      </div>
                      <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                        Instantly view table availability and status in
                        real-time with our table status tracking feature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tablesupervision;
