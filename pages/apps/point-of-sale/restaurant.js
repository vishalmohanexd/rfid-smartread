import React from "react";
import AdvancedAnalytics from "../../../components/inventory/AdvancedAnalytics";
import AndThereMore from "../../../components/Restaurant POS/AndThereMore";
import InventoryManagement from "../../../components/inventory/InventoryManagement";
import InvoicingPricing from "../../../components/Restaurant POS/InvoicingPricing";
import InvoicingPricing2 from "../../../components/Restaurant POS/InvoicingPricing 2";
import Management from "../../../components/Restaurant POS/Management";
import Layout from "../../../hoc/Layout";
import BestPlan from "../../../components/pointofsale/BestPlan";
import TalkUs from "../../../components/pointofsale/TalkUs";
import Faq from "../../../components/Home/Faq";
import Hero from "../../../components/Restaurant POS/Hero";
import PageSEO from "../../../components/common/PageSEO";
import {InventoryFaqData} from "../../../components/common/Helper"
import {MetaData} from "../../../components/common/Helper"
import HrDepartment from "../../../components/Restaurant POS/HrDepartment";
import Tablesupervision from "../../../components/Restaurant POS/Tablesupervision";

const Restaurant2 = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}inventory`


  return (
    <>
      <PageSEO title="Restaurant" 
      canonicalTag={canonicalTag}
      metatitleTag={MetaData[16].titleTag}
      metaDes={MetaData[16].metaDescription} />
      <Layout>
        <Hero />
        <HrDepartment />
        <InvoicingPricing />
        <Management />
        <InvoicingPricing2 />
        <Tablesupervision />
        <AndThereMore />
        {/* <BestPlan id={"Inventory"} /> */}
          <TalkUs pageName="Restaurant"/>
        <Faq feqData={InventoryFaqData} />
      </Layout>
    </>
  );
};

export default Restaurant2;
