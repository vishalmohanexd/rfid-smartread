import React from "react";
import PageSEO from "../../components/common/PageSEO";
import ContactUs from "../../components/contact/ContactUs";
import Layout from "../../hoc/Layout";
import {MetaData} from "../../components/common/Helper"


function contact() {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}contact`

  return (
    <>
      <PageSEO title="Contact" canonicalTag={canonicalTag} metatitleTag={MetaData[10].titleTag}
      metaDes={MetaData[10].metaDescription}/>
      <Layout>
        <ContactUs pageName="Contact" />
      </Layout>
    </>
  );
}

export default contact;
