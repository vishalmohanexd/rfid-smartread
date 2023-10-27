import React, { useEffect } from "react";
import AlwaysOn from "../../components/pointofsale/AlwaysOn";
import BestPlan from "../../components/pointofsale/BestPlan";
import BussinessLoved from "../../components/pointofsale/BussinessLoved";
import CreatingDesign from "../../components/pointofsale/CreatingDesign";
import Management from "../../components/pointofsale/Management";
import PosAnytime from "../../components/pointofsale/PosAnytime";
import PosHero from "../../components/pointofsale/PosHero";
import TalkUs from "../../components/pointofsale/TalkUs";
import Layout from "../../hoc/Layout";
import Faq from "../../components/Home/Faq";
import PageSEO from "../../components/common/PageSEO";
import { posFaqData } from "../../components/common/Helper";
import { MetaData } from "../../components/common/Helper";

const PointOfSale = ({ data }) => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}point-of-sale`;
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
        <PosHero data={datas.poshero} />
        <PosAnytime data={datas.posanytime} />
        <CreatingDesign data={datas.creatingdesign} />
        <AlwaysOn data={datas.alwayson} img={datas.posanytime.imgIcon} />
        <Management data={datas.management} managementdata={datas.managementData}/>
        <BussinessLoved data={datas.businessloved} bussiness={datas.bussiness} />
        <BestPlan id={datas.bestplans.id} />
        <TalkUs pageName={datas.metadata.pageName} />
        <Faq feqData={posFaqData} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await import("./pos.mdx");
  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}

export default PointOfSale;
