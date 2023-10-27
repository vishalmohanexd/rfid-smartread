import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const DashboardHeader = () => {
  const [activeTab, setActiveTab] = useState("my-apps");

  return (
    <>
      <div className="bg-white px-3 sm:px-10 pt-3">
        <div className="flex items-center justify-between">
          <div className="max-w-[100px] sm:max-w-[160px]">
            <Image
              src="/images/cwsuite-logo.png"
              width={180}
              height={22}
              alt="LOGO"
              priority
            />
          </div>

          <div className="hidden lg:block max-w-[395px] w-full">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <svg
              className="cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3327 4.99967C18.3327 4.08301 17.5827 3.33301 16.666 3.33301H3.33268C2.41602 3.33301 1.66602 4.08301 1.66602 4.99967V14.9997C1.66602 15.9163 2.41602 16.6663 3.33268 16.6663H16.666C17.5827 16.6663 18.3327 15.9163 18.3327 14.9997V4.99967ZM16.666 4.99967L9.99935 9.16634L3.33268 4.99967H16.666ZM16.666 14.9997H3.33268V6.66634L9.99935 10.833L16.666 6.66634V14.9997Z"
                fill="#3D4561"
              />
            </svg>

            <svg
              className="cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 12.8253L6.86602 14.717L7.69102 11.1503L4.92435 8.75033L8.57435 8.44199L9.99935 5.07533L11.4243 8.44199L15.0743 8.75033L12.3077 11.1503L13.1327 14.717M18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.20768 11.642L4.84935 17.5003L9.99935 14.392L15.1493 17.5003L13.7827 11.642L18.3327 7.70033Z"
                fill="#3D4561"
              />
            </svg>

            <svg
              className="cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0004 6.66699C10.8844 6.66699 11.7323 7.01818 12.3574 7.6433C12.9825 8.26842 13.3337 9.11627 13.3337 10.0003C13.3337 10.8844 12.9825 11.7322 12.3574 12.3573C11.7323 12.9825 10.8844 13.3337 10.0004 13.3337C9.1163 13.3337 8.26845 12.9825 7.64333 12.3573C7.01821 11.7322 6.66702 10.8844 6.66702 10.0003C6.66702 9.11627 7.01821 8.26842 7.64333 7.6433C8.26845 7.01818 9.1163 6.66699 10.0004 6.66699ZM10.0004 8.33366C9.55833 8.33366 9.1344 8.50925 8.82184 8.82181C8.50928 9.13438 8.33369 9.5583 8.33369 10.0003C8.33369 10.4424 8.50928 10.8663 8.82184 11.1788C9.1344 11.4914 9.55833 11.667 10.0004 11.667C10.4424 11.667 10.8663 11.4914 11.1789 11.1788C11.4914 10.8663 11.667 10.4424 11.667 10.0003C11.667 9.5583 11.4914 9.13438 11.1789 8.82181C10.8663 8.50925 10.4424 8.33366 10.0004 8.33366ZM8.33369 18.3337C8.12535 18.3337 7.95035 18.1837 7.91702 17.9837L7.60869 15.7753C7.08369 15.567 6.63369 15.2837 6.20035 14.9503L4.12535 15.792C3.94202 15.8587 3.71702 15.792 3.61702 15.6087L1.95035 12.7253C1.84202 12.542 1.89202 12.317 2.05035 12.192L3.80869 10.8087L3.75035 10.0003L3.80869 9.16699L2.05035 7.80866C1.89202 7.68366 1.84202 7.45866 1.95035 7.27532L3.61702 4.39199C3.71702 4.20866 3.94202 4.13366 4.12535 4.20866L6.20035 5.04199C6.63369 4.71699 7.08369 4.43366 7.60869 4.22533L7.91702 2.01699C7.95035 1.81699 8.12535 1.66699 8.33369 1.66699H11.667C11.8754 1.66699 12.0504 1.81699 12.0837 2.01699L12.392 4.22533C12.917 4.43366 13.367 4.71699 13.8004 5.04199L15.8754 4.20866C16.0587 4.13366 16.2837 4.20866 16.3837 4.39199L18.0504 7.27532C18.1587 7.45866 18.1087 7.68366 17.9504 7.80866L16.192 9.16699L16.2504 10.0003L16.192 10.8337L17.9504 12.192C18.1087 12.317 18.1587 12.542 18.0504 12.7253L16.3837 15.6087C16.2837 15.792 16.0587 15.867 15.8754 15.792L13.8004 14.9587C13.367 15.2837 12.917 15.567 12.392 15.7753L12.0837 17.9837C12.0504 18.1837 11.8754 18.3337 11.667 18.3337H8.33369ZM9.37535 3.33366L9.06702 5.50866C8.06702 5.71699 7.18369 6.25033 6.54202 6.99199L4.53369 6.12533L3.90869 7.20866L5.66702 8.50033C5.33369 9.47533 5.33369 10.5337 5.66702 11.5003L3.90035 12.8003L4.52535 13.8837L6.55035 13.017C7.19202 13.7503 8.06702 14.2837 9.05869 14.4837L9.36702 16.667H10.6337L10.942 14.492C11.9337 14.2837 12.8087 13.7503 13.4504 13.017L15.4754 13.8837L16.1004 12.8003L14.3337 11.5087C14.667 10.5337 14.667 9.47533 14.3337 8.50033L16.092 7.20866L15.467 6.12533L13.4587 6.99199C12.817 6.25033 11.9337 5.71699 10.9337 5.51699L10.6254 3.33366H9.37535Z"
                fill="#3D4561"
              />
            </svg>

            <Image
              src="/images/Avatar.png"
              width={32}
              height={32}
              priority
              alt="avatar"
            />
            <h4 className="text-blue font-bold text-xs">Rachel Green</h4>
          </div>
        </div>

        <div className="mt-4 lg:hidden max-w-[395px] w-full">
          <SearchBar />
        </div>
        {/* TABS  */}
        <div className="flex justify-between items-center">
          <div className="flex items-center py-4 overflow-auto max-w-full flex-nowrap w-full">
            <button
              onClick={() => setActiveTab("my-apps")}
              className={`${
                activeTab === "my-apps"
                  ? "underline-active-apps  font-semibold"
                  : " font-normal "
              }  ff-inter text-xs mx-4 relative whitespace-nowrap`}
            >
              My Apps
            </button>
            <button
              onClick={() => setActiveTab("app-centre")}
              className={`${
                activeTab === "app-centre"
                  ? "underline-active-apps  font-semibold"
                  : " font-normal "
              }  ff-inter text-xs mx-4 relative whitespace-nowrap`}
            >
              App Centre
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`${
                activeTab === "settings"
                  ? "underline-active-apps  font-semibold"
                  : " font-normal "
              }  ff-inter text-xs mx-4 relative whitespace-nowrap`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`${
                activeTab === "billing"
                  ? "underline-active-apps  font-semibold"
                  : " font-normal "
              }  ff-inter text-xs mx-4 relative whitespace-nowrap `}
            >
              Billing
            </button>
            <button
              onClick={() => setActiveTab("my-account")}
              className={`${
                activeTab === "my-account"
                  ? "underline-active-apps  font-semibold"
                  : " font-normal "
              }  ff-inter text-xs mx-4 relative whitespace-nowrap`}
            >
              {" "}
              My Account
            </button>
          </div>

          <svg
            className="cursor-pointer ml-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12ZM10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12ZM4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12Z"
              fill="#3D4561"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
