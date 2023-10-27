import React from "react";
import PageSEO from "../../components/common/PageSEO";
import Faq from "../../components/Home/Faq";
import DragDropApp from "../../components/priceconnect/DragDropApp";
import Hero from "../../components/priceconnect/Hero";
import SeeNotonAction from "../../components/priceconnect/SeeNotonAction";
import YourProductivity from "../../components/priceconnect/YourProductivity";
import Layout from "../../hoc/Layout";
import {MetaData} from "../../components/common/Helper"
import { faqDataHome } from "../../components/common/Helper";
const PriceConnect = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}noton`

  return (
    <>
      <PageSEO title="Price connect" canonicalTag={canonicalTag} metatitleTag={MetaData[15].titleTag}
      metaDes={MetaData[7].metaDescription}/>
      <Layout>
        <Hero />
        <DragDropApp />
        <YourProductivity />
        <SeeNotonAction />
        <Faq feqData={faqDataHome} id={'faq'}/>
      </Layout>
    </>
  );
};

export default PriceConnect;
