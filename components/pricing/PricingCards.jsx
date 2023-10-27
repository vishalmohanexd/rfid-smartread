import Link from "next/link";
import React from "react";

const PricingCards = () => {
  return (
    <>
      <Link
        href={"/pos-pricing"}
        className="mb-8 xl:mb-0 flex flex-col justify-between min-h-[271px] max-h-[271px] w-full lg:w-[48%] xl:w-[31%] px-5 py-6 border-[#CDCDCD] border-[2px] rounded-[17px] transition-all duration-200 ease-in hover:border-black hover:shadow-lg  "
      >
        <div>
          <div className="mb-4 flex items-center">
            <h3 className="text-dimblue text-[25px] font-semibold ff-inter">
              Suite POS
            </h3>
            <svg
              className="ml-3"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1379_7895)">
                <path
                  d="M10.5458 3.14384L7.85625 0.454345C7.64521 0.243399 7.35901 0.12493 7.06061 0.125C6.76222 0.12507 6.47607 0.243674 6.26513 0.45472C6.05418 0.665766 5.93571 0.951966 5.93578 1.25036C5.93585 1.54875 6.05446 1.8349 6.2655 2.04584L8.09475 3.87509H1.5C1.20163 3.87509 0.915484 3.99362 0.704505 4.2046C0.493527 4.41558 0.375 4.70173 0.375 5.00009C0.375 5.29846 0.493527 5.58461 0.704505 5.79559C0.915484 6.00657 1.20163 6.12509 1.5 6.12509H8.09475L6.2655 7.95434C6.05446 8.16529 5.93585 8.45144 5.93578 8.74983C5.93571 9.04822 6.05418 9.33442 6.26513 9.54547C6.47607 9.75651 6.76222 9.87512 7.06061 9.87519C7.35901 9.87526 7.64521 9.75679 7.85625 9.54584L10.5458 6.85634C11.0372 6.36357 11.3131 5.69603 11.3131 5.00009C11.3131 4.30416 11.0372 3.63662 10.5458 3.14384Z"
                  fill="#5872C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1379_7895">
                  <rect width="12" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-blue font-light ff-inter mb-8">
            Accept payments, track your sales, generate reports and more
          </p>
        </div>

        <span className="text-blue font-medium ff-inter text-[18px]">
        Starts from ₹599/month
        </span>
      </Link>

      <Link
        href={"/pos-pricing"}
        className="mb-8 xl:mb-0 flex flex-col justify-between min-h-[271px] max-h-[271px]w-full lg:w-[48%] xl:w-[32%] px-5 py-6 border-[#CDCDCD] border-[2px] rounded-[17px] transition-all duration-200 ease-in hover:border-black hover:shadow-lg  xl:mx-6"
      >
        <div>
          <div className="mb-4 flex items-center">
            <h3 className="text-dimblue text-lg font-semibold ff-inter">
              Inventory Management
            </h3>
            <svg
              className="ml-3"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1379_7895)">
                <path
                  d="M10.5458 3.14384L7.85625 0.454345C7.64521 0.243399 7.35901 0.12493 7.06061 0.125C6.76222 0.12507 6.47607 0.243674 6.26513 0.45472C6.05418 0.665766 5.93571 0.951966 5.93578 1.25036C5.93585 1.54875 6.05446 1.8349 6.2655 2.04584L8.09475 3.87509H1.5C1.20163 3.87509 0.915484 3.99362 0.704505 4.2046C0.493527 4.41558 0.375 4.70173 0.375 5.00009C0.375 5.29846 0.493527 5.58461 0.704505 5.79559C0.915484 6.00657 1.20163 6.12509 1.5 6.12509H8.09475L6.2655 7.95434C6.05446 8.16529 5.93585 8.45144 5.93578 8.74983C5.93571 9.04822 6.05418 9.33442 6.26513 9.54547C6.47607 9.75651 6.76222 9.87512 7.06061 9.87519C7.35901 9.87526 7.64521 9.75679 7.85625 9.54584L10.5458 6.85634C11.0372 6.36357 11.3131 5.69603 11.3131 5.00009C11.3131 4.30416 11.0372 3.63662 10.5458 3.14384Z"
                  fill="#5872C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1379_7895">
                  <rect width="12" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-blue font-light ff-inter mb-8">
            An accurate view of your inventory to guarantee fulfillment of
            customer orders, reduce shipment turnaround times and minimize
            stockouts
          </p>
        </div>

        <span className="text-blue font-medium ff-inter text-[18px]">
        Starts from ₹599/month
        </span>
      </Link>
      <Link
        href={"/pos-pricing"}
        className="mb-8 xl:mb-0 flex flex-col justify-between min-h-[271px] max-h-[271px]w-full lg:w-[48%] xl:w-[32%] px-5 py-6 border-[#CDCDCD] border-[2px] rounded-[17px] transition-all duration-200 ease-in hover:border-black hover:shadow-lg "
      >
        <div>
          <div className="mb-4 flex items-center">
            <h3 className="text-dimblue text-[25px] font-semibold ff-inter">
              HRMS
            </h3>
            <svg
              className="ml-3"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1379_7895)">
                <path
                  d="M10.5458 3.14384L7.85625 0.454345C7.64521 0.243399 7.35901 0.12493 7.06061 0.125C6.76222 0.12507 6.47607 0.243674 6.26513 0.45472C6.05418 0.665766 5.93571 0.951966 5.93578 1.25036C5.93585 1.54875 6.05446 1.8349 6.2655 2.04584L8.09475 3.87509H1.5C1.20163 3.87509 0.915484 3.99362 0.704505 4.2046C0.493527 4.41558 0.375 4.70173 0.375 5.00009C0.375 5.29846 0.493527 5.58461 0.704505 5.79559C0.915484 6.00657 1.20163 6.12509 1.5 6.12509H8.09475L6.2655 7.95434C6.05446 8.16529 5.93585 8.45144 5.93578 8.74983C5.93571 9.04822 6.05418 9.33442 6.26513 9.54547C6.47607 9.75651 6.76222 9.87512 7.06061 9.87519C7.35901 9.87526 7.64521 9.75679 7.85625 9.54584L10.5458 6.85634C11.0372 6.36357 11.3131 5.69603 11.3131 5.00009C11.3131 4.30416 11.0372 3.63662 10.5458 3.14384Z"
                  fill="#5872C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1379_7895">
                  <rect width="12" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-blue font-light ff-inter mb-8">
            CW HRMS meticulously combines all the different HR processes and
            systems to ensure smooth functioning of business
          </p>
        </div>
        <span className="text-blue font-medium ff-inter text-[18px]">
        Starts from ₹599/month
        </span>
      </Link>
    </>
  );
};

export default PricingCards;
