import React, { useEffect } from "react";
import RfidHero from "../components/rfid/rfidHero";
import TalkUs from "../components/pointofsale/TalkUs";
import Layout from "../hoc/Layout";
import Faq from "../components/Home/Faq";
import PageSEO from "../components/common/PageSEO";
import { MetaData } from "../components/common/Helper";
import RfidButtons from "../components/rfid/buttons";
import RfidCards from "../components/rfid/cards";
import RfidProducts from "../components/rfid/products";

const RfidHOme = ({data}) => {
   const datas=JSON.parse(data)
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}solutions/rfid-connect`;
  return (
    <>
      <PageSEO
        title="RFID Solutions"
        canonicalTag={canonicalTag}
        metatitleTag={MetaData[18].titleTag}
        metaDes={MetaData[18].metaDescription}
      />
      <Layout>
        <RfidHero data={datas.Hero} />
        <RfidButtons data={datas.rfidData}/>
        <RfidCards heroData={datas.Industries} data={datas.industryData} />
        <RfidProducts heroData={datas.productsSection} data={datas.productItems}  />
        {/* <Enhanced />
        <InvoicingPricing />
        <Connect /> */}
        <TalkUs pageName="Rfid Solutions" />
        <Faq feqData={datas.RfidHomeFaqdata} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await import("../pages/solutions/rfid-home.json");
  return {
    props: {
      data: JSON.stringify(data),
    },
    revalidate: false
  };
}
export default RfidHOme;

