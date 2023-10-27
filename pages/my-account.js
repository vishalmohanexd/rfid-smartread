import React from "react";
import PageSEO from "../components/common/PageSEO";
import DashboardHeader from "../components/myaccount/DashboardHeader";
import DashboardNavbar from "../components/myaccount/DashboardNavbar";
import YourPaidApps from "../components/myaccount/YourPaidApps";

const MyAccount = () => {
  return (
    <>
      <PageSEO title="My Account" />
      <div className="bg-[#f3f4f9] min-h-screen">
        <DashboardNavbar />
        <DashboardHeader />
        <div className="mx-4 lg:mx-20 pt-6 sm:pt-10 sm:pb-16">
          <YourPaidApps />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
