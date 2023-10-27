import React from "react";
import PageSEO from "../../components/common/PageSEO";
import Faq from "../../components/Home/Faq";
import BestPlan from "../../components/pointofsale/BestPlan";
import TalkUs from "../../components/pointofsale/TalkUs";
import ERFx from "../../components/purchase/ERFx";
import FrictionlessPurchasing from "../../components/purchase/FrictionlessPurchasing";
import PurchaseHero from "../../components/purchase/PurchaseHero";
import Layout from "../../hoc/Layout";
import {purchaseFaqData} from "../../components/common/Helper"
import {MetaData} from "../../components/common/Helper"

const Purchase = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}purchase`

  return (
    <>
      <PageSEO title="Purchase" canonicalTag={canonicalTag} metatitleTag={MetaData[4].titleTag}
      metaDes={MetaData[4].metaDescription} />
      <Layout>
        <PurchaseHero />
        <ERFx />
        <FrictionlessPurchasing />
        <BestPlan id={"Purchase"}/>
          <TalkUs pageName="Purchase"/>
        <Faq feqData={purchaseFaqData} />
      </Layout>
    </>
  );
};

export default Purchase;
