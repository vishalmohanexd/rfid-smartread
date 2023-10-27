import Image from "next/image";
import React from "react";

const InventoryManagement = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto md:mt-[100px] sm:mt-[70px] mt-[30px] lg:mt-[130px] px-3 xl:px-0 ">
        <div className="flex flex-col lg:flex-row lg:justify-end items-start relative">
          <div className="max-w-[700px] mx-auto lg:mx-0 mt-9 lg:mt-0 left-0 z-[-1] lg:absolute">
            <Image
              className="inventory_img hidden lg:block"
              src="/images/inventory-management-img.png"
              width={1083}
              height={772}
              alt="inventory management img"
            />
          </div>

          <div className="lg:max-w-[550px] -order-1 lg:order-2 mt-5 lg:mt-0 w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className=" font-bold sm:text-3xl md:text-[48px] text-xl text-darkBlack leading-[28px] sm:leading-[40px] md:leading-[52px]  text-center lg:text-start max-w-[667px] ">
                Centralized Inventory Management
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className=" font-normal text-center lg:text-start text-base sm:text-md text-lightgrey max-w-[702px] mt-[8px] sm:mt-[15px]">
                Real-time tracking of inventory levels to quickly identify
                inventory shortages and surpluses to make informed decisions
              </p>
            </div>
            <div className="max-w-[700px] mx-auto lg:mx-0 mt-9 lg:mt-0 left-0 z-[-1] lg:absolute">
              <Image
                className="inventory_img lg:hidden"
                src="/images/inventory-management-img.webp"
                width={1083}
                height={772}
                alt="mobile inventory img"
              />
            </div>
            <div className="border-t-2 mt-[14px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[15px] grid sm:grid-cols-2 gap-[10px] xl:gap-[15px]">
                <div className=" mt-[10px]  sm:mt-0 max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Data Sync
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    Update stock level across all channels, locations, devices,
                    and teams
                  </p>
                </div>
                <div className=" mt-[15px] sm:mt-0 max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Seamless Integration
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey ">
                    Easy integration with existing systems and external tools
                  </p>
                </div>
                <div className="mt-[15px] max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Avoid Out-of-Stock
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    Set up alerts to avoid low stock and out-of-stock
                    situations; configure re-order inventory points
                  </p>
                </div>
                <div className="mt-[15px] max-w-[325px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className=" ml-[5px] font-bold text-xs xl:text-sm text-darkBlack">
                      Ordering
                    </p>
                  </div>
                  <p className="font-normal mt-2 ff-inter text-base text-lightgrey">
                    Accept advance orders, send estimates & quotations, and
                    fulfil and deliver special orders
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

export default InventoryManagement;
