import React from "react";
import Image from "next/image";

import { LeftArrow } from "../common/Icons";

const RfidHero = ({ data }) => {
  return (
    <div>
      <div className="container mx-auto px-3">
        <div className="flex justify-center">
          <h1 className="font-Inter text-[#101828] font-bold sm:mx-0 mx-[5px] leading-[42px] sm:leading-[50px] md:leading-[70px]  mt-[50px] sm:mt-[90px] max-w-[350px] sm:max-w-[794px]  text-center text-2xl md:text-[48px]">
            {data?.title}
          </h1>
        </div>
        <div className="flex justify-center mt-[17px] sm:mt-[34px]">
          <p className="font-Inter font-normal text-sm sm:text-md max-w-[755px] text-center text-lightgrey ">
            {data?.subtitle}
          </p>
        </div>
        <div className="flex justify-center lg:justify-center flex-col sm:flex-row  sm:mt-[28px]">
          <button className="mt-5 sm:mt-[0px] bg-blue   w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lightblue">
            {data?.button}
            <LeftArrow />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          className="mt-[20px] sm:mt-[40px]"
          src="/images/rfidHero.webp"
          width={1920}
          height={561}
          alt="pos hero img"
        />
        <div className=" hidden lg:block absolute top-0 left-0  items-center justify-center flex-shrink-0 border-1 border-solid border-gray-300 rounded-[6px] bg-opacity-60 bg-black p-5  w-[14em] h-[24em] lg:ml-[8em] mt-[4em]">
          <div className=" p-2 flex items-center">
            {/* First Column: Image */}
            <div className="bg-[#000] p-2 border border-solid border-[#505050]">
              <Image
                src="/images/sku.webp"
                width={87}
                height={52}
                alt="sku Image"
              />
            </div>

            {/* Second Column: Text */}
            <div className="ml-2 text-white font-inter font-semibold text-16 leading-28">
              <p>SKU</p>
              <p>109237</p>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <p className="text-white font-inter font-semibold text-[22px] leading-28">
              Brown crop top
            </p>
          </div>
          <div>
            <p className="text-white font-inter font-normal text-[16px] font-weight-600 leading-28">
              Available in
            </p>
          </div>
          <div className="mt-2 mb-2 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="11.25"
                fill="#96556C"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="11.25"
                fill="#A2D61B"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="11.25"
                fill="#6D0F99"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-inter font-normal text-16 leading-28">
              In stock - 3
            </p>
          </div>
          <div>
            <p className="text-white font-inter font-normal text-[18px] leading-28 mt-4">
              Customer rating
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="161"
              height="35"
              viewBox="0 0 161 35"
              fill="none"
            >
              <g clip-path="url(#clip0_5183_4884)">
                <path
                  d="M32.8125 12.8516C32.8125 22.4219 18.6225 30.1684 18.0182 30.4883C17.8589 30.574 17.6809 30.6188 17.5 30.6188C17.3191 30.6188 17.1411 30.574 16.9818 30.4883C16.3775 30.1684 2.1875 22.4219 2.1875 12.8516C2.19003 10.6042 3.08391 8.44964 4.67303 6.86053C6.26214 5.27141 8.41672 4.37753 10.6641 4.375C13.4873 4.375 15.9592 5.58906 17.5 7.64121C19.0408 5.58906 21.5127 4.375 24.3359 4.375C26.5833 4.37753 28.7379 5.27141 30.327 6.86053C31.9161 8.44964 32.81 10.6042 32.8125 12.8516Z"
                  fill="#8A0C0C"
                />
                <path
                  d="M68.8125 12.8516C68.8125 22.4219 54.6225 30.1684 54.0182 30.4883C53.8589 30.574 53.6809 30.6188 53.5 30.6188C53.3191 30.6188 53.1411 30.574 52.9818 30.4883C52.3775 30.1684 38.1875 22.4219 38.1875 12.8516C38.19 10.6042 39.0839 8.44964 40.673 6.86053C42.2621 5.27141 44.4167 4.37753 46.6641 4.375C49.4873 4.375 51.9592 5.58906 53.5 7.64121C55.0408 5.58906 57.5127 4.375 60.3359 4.375C62.5833 4.37753 64.7379 5.27141 66.327 6.86053C67.9161 8.44964 68.81 10.6042 68.8125 12.8516Z"
                  fill="#8A0C0C"
                />
                <path
                  d="M104.625 12.4766C104.625 22.0469 90.435 29.7934 89.8307 30.1133C89.6714 30.199 89.4934 30.2438 89.3125 30.2438C89.1316 30.2438 88.9536 30.199 88.7943 30.1133C88.19 29.7934 74 22.0469 74 12.4766C74.0025 10.2292 74.8964 8.07464 76.4855 6.48553C78.0746 4.89641 80.2292 4.00253 82.4766 4C85.2998 4 87.7717 5.21406 89.3125 7.26621C90.8533 5.21406 93.3252 4 96.1484 4C98.3958 4.00253 100.55 4.89641 102.139 6.48553C103.729 8.07464 104.622 10.2292 104.625 12.4766Z"
                  fill="#8A0C0C"
                />
                <path
                  d="M140.625 12.4766C140.625 22.0469 126.435 29.7934 125.831 30.1133C125.671 30.199 125.493 30.2438 125.312 30.2438C125.132 30.2438 124.954 30.199 124.794 30.1133C124.19 29.7934 110 22.0469 110 12.4766C110.003 10.2292 110.896 8.07464 112.486 6.48553C114.075 4.89641 116.229 4.00253 118.477 4C121.3 4 123.772 5.21406 125.312 7.26621C126.853 5.21406 129.325 4 132.148 4C134.396 4.00253 136.55 4.89641 138.139 6.48553C139.729 8.07464 140.622 10.2292 140.625 12.4766Z"
                  fill="#8A0C0C"
                />
                <path
                  d="M176.625 12.4766C176.625 22.0469 162.435 29.7934 161.831 30.1133C161.671 30.199 161.493 30.2438 161.312 30.2438C161.132 30.2438 160.954 30.199 160.794 30.1133C160.19 29.7934 146 22.0469 146 12.4766C146.003 10.2292 146.896 8.07464 148.486 6.48553C150.075 4.89641 152.229 4.00253 154.477 4C157.3 4 159.772 5.21406 161.312 7.26621C162.853 5.21406 165.325 4 168.148 4C170.396 4.00253 172.55 4.89641 174.139 6.48553C175.729 8.07464 176.622 10.2292 176.625 12.4766Z"
                  fill="#8A0C0C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5183_4884">
                  <rect width="161" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-white font-inter font-extrabold text-[26px] leading-28 font-weight-700">
            ₹2,999.00
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3">
        <div className="flex justify-center">
          <h1 className="font-Inter text-[#101828] font-bold sm:mx-0 mx-[5px] leading-[42px] sm:leading-[50px] md:leading-[70px]  mt-[50px] sm:mt-[90px] max-w-[350px] sm:max-w-[794px]  text-center text-2xl md:text-[48px]">
            {data["RFIDSolutions"].title}
            {/*           
            Revolutionising Retail: RFID Solutions at the Forefront */}
          </h1>
        </div>
        <div className="flex justify-center mt-[17px] sm:mt-[34px]">
          <p className="font-Inter font-normal text-sm sm:text-md max-w-[755px] text-center text-lightgrey mb-2">
            {data["RFIDSolutions"].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RfidHero;
