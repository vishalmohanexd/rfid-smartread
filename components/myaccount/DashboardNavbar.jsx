import React from "react";
import Link from "next/link";
const DashboardNavbar = () => {
  return (
    <>
      <div className="bg-blue h-[40px] flex items-center px-4">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1379_8428)">
            <path
              d="M3.66699 7.33366H7.33366V3.66699H3.66699V7.33366ZM9.16699 18.3337H12.8337V14.667H9.16699V18.3337ZM3.66699 18.3337H7.33366V14.667H3.66699V18.3337ZM3.66699 12.8337H7.33366V9.16699H3.66699V12.8337ZM9.16699 12.8337H12.8337V9.16699H9.16699V12.8337ZM14.667 3.66699V7.33366H18.3337V3.66699H14.667ZM9.16699 7.33366H12.8337V3.66699H9.16699V7.33366ZM14.667 12.8337H18.3337V9.16699H14.667V12.8337ZM14.667 18.3337H18.3337V14.667H14.667V18.3337Z"
              fill="#F8F5F5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1379_8428">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h6 className="text-white font-bold text-xs ff-inter mx-4">
          Point Of Sale
        </h6>

        <Link
          className="text-white font-normal text-xs ff-inter opacity-80 ml-8 mr-6"
          href="/apps/inventory"
        >
          Inventory
        </Link>
        <Link
          className="text-white font-normal text-xs ff-inter opacity-80"
          href="/apps/finance"
        >
          Finance
        </Link>
      </div>
    </>
  );
};

export default DashboardNavbar;
