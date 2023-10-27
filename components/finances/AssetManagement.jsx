import Image from "next/image";
import React from "react";

const AssetManagement = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-3 xl:px-0 sm:mt-[70px] mt-[40px] md:mt-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-[500px] mt-9 lg:mt-0 lg:pr-2 xl:pr-0 w-full hidden lg:block">
            <Image
              src="/images/asset-management-img.png"
              width={620}
              height={627}

            />
          </div>
          <div className="max-w-[500px]  -order-1 lg:order-2  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[53px] text-center lg:text-start max-w-[667px] ">
                Asset Management
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[17px]">
                Manage and optimize the use of the company’s financial assets
                like stock, dividend, machinery, equity and so on to help
                establish efficient asset models
              </p>
            </div>
            <div className="max-w-[500px] mt-9 lg:mt-0 lg:pr-2 xl:pr-0 w-full lg:hidden">
            <Image
              src="/images/asset-management-img.png"
              width={620}
              height={627}

            />
          </div>
            <div className="flex mt-5 lg:mt-3 items-center">
              <Image
                width={25}
                height={18}
                src="/images/posmainIcon.png"
                alt="pos main icon"
              />
              <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                Track status
              </p>
            </div>
            <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
              Track the purchase, sale, and current value of assets, as well as
              provide information on the income or expenses associated with the
              assets of the business
            </p>
            <div className="flex mt-5 lg:mt-3 items-center">
              <Image
                width={25}
                height={18}
                src="/images/posmainIcon.png"
                alt="pos main icon"
              />
              <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                Asset Reports
              </p>
            </div>
            <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
              Generate reports on assets, such as balance sheets and income
              statements, which can be used to make more informed decisions
              about the management of assets.
            </p>
            <div className="flex mt-5 lg:mt-3 items-center">
              <Image
                width={25}
                height={18}
                src="/images/posmainIcon.png"
                alt="pos main icon"
              />
              <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                Calculate Depriciation
              </p>
            </div>
            <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
              Calculate the depreciation based on the asset&lsquo;s cost,
              estimated useful life, and automatically record the depreciation
              in the company&lsquo;s financial records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;
