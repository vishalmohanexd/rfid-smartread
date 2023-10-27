import React from "react";
import CreatingDesign from "../../components/professional/CreatingDesign";
import InvoicingPricing from "../../components/professional/InvoicingPricing"
import AssetManagement from "../../components/professional/AssetManagement"
import Customisation from "../../components/professional/Customisation"
import Management from "../../components/pointofsale/Management";
import PosAnytime from "../../components/pointofsale/PosAnytime";
import ProfessionalHero from "../../components/professional/ProfessionalHero";
import Trainings from "../../components/professional/Trainings"
import TalkUs from "../../components/pointofsale/TalkUs";
import Layout from "../../hoc/Layout";
import Faq from "../../components/Home/Faq";
import PageSEO from "../../components/common/PageSEO";
import {posFaqData} from "../../components/common/Helper"
import {MetaData} from "../../components/common/Helper"

const PointOfSale = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}professional-services`

  return (
    <>
      <PageSEO title="Professional Services" canonicalTag={canonicalTag} metatitleTag={MetaData[9].titleTag}
      metaDes={MetaData[9].metaDescription}/>
      <Layout>
        <ProfessionalHero />
        <CreatingDesign />
        <InvoicingPricing />
        <AssetManagement />
        <Customisation />
        <Trainings />
          <TalkUs pageName="Professional Services"/>
      </Layout>
    </>
  );
};

export default PointOfSale;
