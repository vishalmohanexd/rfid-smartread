import React from "react";
import CustomerAccounts from "../../components/sales/CustomerAccounts";
import Hero from "../../components/sales/Hero";
import UnlockBoostProductivity from "../../components/sales/UnlockBoostProductivity";
import Layout from "../../hoc/Layout";
import TalkUs from "../../components/pointofsale/TalkUs";
import Faq from "../../components/Home/Faq";
import BestPlan from "../../components/pointofsale/BestPlan";
import PageSEO from "../../components/common/PageSEO";
import {salesFaqData} from "../../components/common/Helper"
import {MetaData} from "../../components/common/Helper"

const Sales = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}sales`

  return (
    <>
      <PageSEO title="Sales" canonicalTag={canonicalTag} metatitleTag={MetaData[3].titleTag}
      metaDes={MetaData[3].metaDescription} />
      <Layout>
        <Hero />
        <CustomerAccounts />
        <UnlockBoostProductivity />
        <BestPlan id={"Sales"} />
          <TalkUs pageName="Sales"/>
        <Faq feqData={salesFaqData} />
      </Layout>
    </>
  );
};

export default Sales;
