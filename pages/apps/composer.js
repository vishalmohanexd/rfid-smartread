import React from "react";
import PageSEO from "../../components/common/PageSEO";
import TalkUs from "../../components/noton/TalkUs";
import Faq from "../../components/Home/Faq";
import ContactUsCheckOut from "../../components/noton/ContactUsCheckOut";
import DigitalRevolutionPartner from "../../components/noton/DigitalRevolutionPartner";
import DragDropApp from "../../components/noton/DragDropApp";
import Hero from "../../components/noton/Hero";
import SeeNotonAction from "../../components/noton/SeeNotonAction";
import YourProductivity from "../../components/noton/YourProductivity";
import BestPlan from "../../components/pointofsale/BestPlan";
import Layout from "../../hoc/Layout";
import {MetaData} from "../../components/common/Helper"
import AndThereMore from "../../components/noton/AndThereMore";
import { faqDataHome } from "../../components/common/Helper";
const Noton = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}noton`

  return (
    <>
      <PageSEO title="My Account" canonicalTag={canonicalTag} metatitleTag={MetaData[7].titleTag}
      metaDes={MetaData[7].metaDescription}/>
      <Layout>
        <Hero />
        <DigitalRevolutionPartner />
        <DragDropApp />
        <YourProductivity />
        <SeeNotonAction />
        <AndThereMore />
        {/* <BestPlan id={".noton"}/> */}
        <TalkUs pageName="Composer"/>
        <Faq feqData={faqDataHome} id={'faq'}/>
      </Layout>
    </>
  );
};

export default Noton;
