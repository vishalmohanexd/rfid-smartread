import React from "react";
import AdvancedAnalytics from "../../components/retail-inventory/AdvancedAnalytics";
import AndThereMore from "../../components/inventory/AndThereMore";
import InventoryManagement from "../../components/inventory/InventoryManagement";
import InvoicingPricing from "../../components/inventory/InvoicingPricing";
import Layout from "../../hoc/Layout";
import BestPlan from "../../components/pointofsale/BestPlan";
import TalkUs from "../../components/restaurant-point-of-sell/TalkUs";
import Faq from "../../components/Home/Faq";
import Hero from "../../components/retail/Hero";
import PageSEO from "../../components/common/PageSEO";
import {InventoryFaqData} from "../../components/common/Helper"
import {MetaData} from "../../components/common/Helper"
import AspectBussiness from "../../components/retail-home/AspectBussiness";
import PosAnytime from "../../components/retail-pointof-sell/PosAnytime";
import AlwaysOn from "../../components/retail-pointof-sell/AlwaysOn";
import { faqDataHome } from "../../components/retail-comman/Helper";
import Pricing from "../../components/retail-home/Pricing";

const Inventory = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}solutions/retail`


  return (
    <>
      <PageSEO title="Retail" 
      canonicalTag={canonicalTag}
      metatitleTag={MetaData[14].titleTag}
      metaDes={MetaData[14].metaDescription} />
      <Layout>
        <Hero />
        <AspectBussiness />
        <PosAnytime />
        <AdvancedAnalytics />
        <Pricing />
        <TalkUs pageName="Retail"/>
        <Faq feqData={faqDataHome} />
      </Layout>
    </>
  );
};

export default Inventory;
