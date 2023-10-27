import React from "react";
import SignUp from "../components/auth/SignUp";
import PageSEO from "../components/common/PageSEO";
import Layout from "../hoc/Layout";

const SignupPage = () => {
  return (
    <>
      <PageSEO title="Sign up" />
      <Layout>
        <SignUp />
      </Layout>
    </>
  );
};

export default SignupPage;
