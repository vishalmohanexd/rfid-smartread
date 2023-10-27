import React from "react";
import PageSEO from "../components/common/PageSEO";
import Contact from "../components/Home/Contact";
import Layout from "../hoc/Layout";

export default function Support() {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}support`

  return (
    <>
      <PageSEO title="Support" canonicalTag={canonicalTag} />
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
