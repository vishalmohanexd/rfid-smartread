import React from "react";
import AboutHero from "../../components/about/AboutHero";
import AboutSlider from "../../components/about/AboutSlider";
import AboutUsDescription from "../../components/about/AboutUsDescription";
import PageSEO from "../../components/common/PageSEO";
import Layout from "../../hoc/Layout";
import {MetaData} from "../../components/common/Helper"
import WhyOpt from "../../components/about/Whyopt";

const Aboutus = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}aboutus`
  return (
    <>
      <PageSEO title="About Us" canonicalTag={canonicalTag} metatitleTag={MetaData[11].titleTag}
      metaDes={MetaData[11].metaDescription}/>
      <Layout>
        <AboutHero />
        <AboutUsDescription />
        <WhyOpt />
        <AboutSlider />
      </Layout>
    </>
  );
};

export default Aboutus;
