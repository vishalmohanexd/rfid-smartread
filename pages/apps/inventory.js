import React from "react";
import AdvancedAnalytics from "../../components/inventory/AdvancedAnalytics";
import AndThereMore from "../../components/inventory/AndThereMore";
import InventoryManagement from "../../components/inventory/InventoryManagement";
import InvoicingPricing from "../../components/inventory/InvoicingPricing";
import Layout from "../../hoc/Layout";
import BestPlan from "../../components/pointofsale/BestPlan";
import TalkUs from "../../components/pointofsale/TalkUs";
import Faq from "../../components/Home/Faq";
import Hero from "../../components/inventory/Hero";
import PageSEO from "../../components/common/PageSEO";
import { InventoryFaqData } from "../../components/common/Helper";
import { MetaData } from "../../components/common/Helper";

const Inventory = ({data}) => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}inventory`;
  const datas = JSON.parse(data);
  return (
    <>
   
      <PageSEO
       title={datas.metadata.title}
       canonicalTag={canonicalTag}
       metatitleTag={datas.metadata.titleTag}
       metaDes={datas.metadata.metaDescription}
      />
      <Layout>
        <Hero />
        <InventoryManagement />
        <InvoicingPricing />
        <AdvancedAnalytics />
        <AndThereMore />
        <BestPlan id={"Inventory"} />
        <TalkUs pageName="Inventory" />
        <Faq feqData={InventoryFaqData} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await import("./inventory.mdx");
  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}

export default Inventory;
