import React from "react";
import PageSEO from "../../components/common/PageSEO";
import AccountingAndBudgeting from "../../components/finances/AccountingAndBudgeting";
import AndThereMore from "../../components/finances/AndThereMore";
import AssetManagement from "../../components/finances/AssetManagement";
import FinancialManagement from "../../components/finances/FinancialManagement";
import Hero from "../../components/finances/Hero";
import Faq from "../../components/Home/Faq";
import BestPlan from "../../components/pointofsale/BestPlan";
import TalkUs from "../../components/pointofsale/TalkUs";
import Layout from "../../hoc/Layout";
import {financeFaqData} from "../../components/common/Helper"
import {MetaData} from "../../components/common/Helper"


const Finance = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}finance`

  return (
    <>
      <PageSEO title="Finance" canonicalTag={canonicalTag} metatitleTag={MetaData[5].titleTag}
      metaDes={MetaData[5].metaDescription} />
      <Layout>
        <Hero />
        <FinancialManagement />
        <AccountingAndBudgeting />
        <AssetManagement />
        {/* <AndThereMore /> */}
        {/* <BestPlan id={"Finance"}/> */}
        <TalkUs pageName="Finance"/>
        <Faq feqData={financeFaqData} />
      </Layout>
    </>
  );
};

export default Finance;
