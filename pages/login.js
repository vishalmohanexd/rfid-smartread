import React from "react";
import LoginPage from "../components/auth/LoginPage";
import PageSEO from "../components/common/PageSEO";

const Login = () => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_Auth}sign-in`

  return (
    <>
      <PageSEO title="Login" canonicalTag={canonicalTag} />
      <LoginPage />
    </>
  );
};

export default Login;
