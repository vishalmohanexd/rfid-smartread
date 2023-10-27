import React from "react";
import AdvancedAnalytics from "../../components/restaurant_inventory/AdvancedAnalytics";
import AndThereMore from "../../components/inventory/AndThereMore";
import InventoryManagement from "../../components/inventory/InventoryManagement";
import InvoicingPricing from "../../components/inventory/InvoicingPricing";
import Layout from "../../hoc/Layout";
import BestPlan from "../../components/pointofsale/BestPlan";
import TalkUs from "../../components/restaurant-point-of-sell/TalkUs";
import Faq from "../../components/Home/Faq";
import Hero from "../../components/restaurant/Hero";
import PageSEO from "../../components/common/PageSEO";
import {InventoryFaqData} from "../../components/common/Helper"
import {MetaData} from "../../components/common/Helper"
import AspectBussiness from "../../components/restaurant-home/AspectBussiness";
import PosAnytime from "../../components/restaurant-point-of-sell/PosAnytime";
import AlwaysOn from "../../components/retail-pointof-sell/AlwaysOn";
import { faqDataHome } from "../../components/retail-comman/Helper";
import Pricing from "../../components/restaurant-home/Pricing";

const Restaurant = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}solutions/restaurant`

  return (
    <>
      <PageSEO title="Restaurant" 
      canonicalTag={canonicalTag}
      metatitleTag={MetaData[13].titleTag}
      metaDes={MetaData[13].metaDescription} />
      <Layout>
        <Hero />
        <AspectBussiness />
        <PosAnytime />
        <AdvancedAnalytics />
        <Pricing />
        <TalkUs pageName="Restaurant"/>
        <Faq feqData={faqDataHome} />
      </Layout>
    </>
  );
};

export default Restaurant;
