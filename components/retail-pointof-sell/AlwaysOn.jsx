import Image from "next/image";
import React from "react";

const AlwaysOn = () => {
  return (
    <div>
      <div className="container px-3 mx-auto py-12 lg:py-20">
  <div className="grid lg:grid-cols-2 gap-[25px] sm:gap-[50px] mx-[10px] lg:mx-[0px] xl:gap-[67px]">
    <div className="flex items-stretch">
      <Image
        src="/images/offline-modal-always-onimage.png"
        width={750}
        height={744}
        alt="always img"
      />
    </div>
    <div className="flex flex-col justify-between">
      <h2 className="font-bold ff-Inter sm:mt-0 text-center sm:text-start text-xl sm:text-[48px] text-darkBlack">
        Seamless Integration
      </h2>
      <p className="font-normal ff-inter text-center sm:text-start text-lg text-lightgrey max-w-auto">
        Our apps are built to integrate smoothly with major platforms such as SAP, Salesforce, and Shopify, broadening your retail management capabilities
      </p>
      <div className="mt-[20px] sm:mt-[48px] gap-[25px] sm:grid flex flex-col items-start sm:grid-cols-1">
        <div className="max-w-auto">
          <div className="flex items-center">
            <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
              Enhanced Efficiency
            </p>
          </div>
          <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
            Smooth integration enables retailers to streamline their operations by seamlessly sharing data and information between different apps eliminating manual processes and reducing errors
          </p>
        </div>
        <div className="max-w-auto">
          <div className="flex items-center">
            <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
              Real-Time Data Syncing
            </p>
          </div>
          <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
            Ensures that data is synchronized in real-time across different apps so retailers can have accurate and up-to-date information available across their entire system
          </p>
        </div>
        <div className="sm:mt-3 max-w-auto">
          <div className="flex items-center">
            <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
              Expanded Functionality
            </p>
          </div>
          <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
            Integration with other apps extends the functionality of the retail suite, providing access to additional features and capabilities that complement and enhance the overall retail operations
          </p>
        </div>
        <div className="sm:mt-3 max-w-auto">
          <div className="flex items-center">
            <p className="ff-Inter ml-[5px] font-bold text-sm text-darkBlack">
              Offline Payments
            </p>
          </div>
          <p className="font-normal mt-[10px] sm:mt-[18px] ff-inter text-base">
            Create a threshold for offline payments and be notified when payment is accepted offline
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AlwaysOn;
