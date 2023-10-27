import React from "react";
import PageSEO from "../../components/common/PageSEO";
import Faq from "../../components/Home/Faq";
import Hero from "../../components/Home/Hero";
import HrDepartment from "../../components/hr/HrDepartment";
import HRPartners from "../../components/hr/HRPartners";
import LeaveAssistance from "../../components/hr/LeaveAssistance";
import Management from "../../components/hr/Management";
import WorkforceManagement from "../../components/hr/WorkforceManagement ";
import BestPlan from "../../components/pointofsale/BestPlan";
import TalkUs from "../../components/pointofsale/TalkUs";
import Layout from "../../hoc/Layout";
import {MetaData} from "../../components/common/Helper"


function HRPage() {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}hr`

  return (
    <>
      <PageSEO title="HR" canonicalTag={canonicalTag} metatitleTag={MetaData[6].titleTag}
      metaDes={MetaData[6].metaDescription}/>
      <Layout>
        <HRPartners />
        <HrDepartment />
        <WorkforceManagement />
        <LeaveAssistance />
        <Management />
        {/* <BestPlan /> */}
        <TalkUs pageName="HRMS"/>
        {/* <Faq /> */}
      </Layout>
    </>
  );
}

export default HRPage;
