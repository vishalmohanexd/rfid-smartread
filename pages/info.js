import React from "react";
import axios from "axios";
import PageSEO from "../components/common/PageSEO";
import Faq from "../components/Home/Faq";
import PricingHeader from "../components/pricing/PricingHeader";
import PricingTabs from "../components/pricing/PricingTabs";
import Layout from "../hoc/Layout";
import { PricingFaqData } from "../components/common/Helper";
import {MetaData} from "../components/common/Helper"


const Info = ({subscriptionApps}) => {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}info`

  return (
    <>
      <PageSEO title="info" canonicalTag={canonicalTag} metatitleTag={MetaData[12].titleTag}
      metaDes={MetaData[12].metaDescription}/>
      <Layout>
      <div id="privacy" className="py-10 sm:py-20 px-3 max-w-[1120px] mx-auto mt-8">
        <h2 className="text-darkBlack text-[33px] font-bold ff-inter mb-6">
          Privacy Policy
        </h2>
        <p className="text-lightgrey text-base sm:text-sm leading-[28px] mb-3">
          At CW Suite, we understand that the privacy and security of your personal information is important. This Privacy Policy explains how we collect, use, and disclose your information when you use our online ERP business solutions and apps for retailers. By using and visiting our website and by submitting your personal information to us you agree to us using your personal information as set out in this privacy policy.
        </p>
        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        We respect the privacy of users of our website and recognize that when you choose to provide us with information about yourself, you trust us to act in a responsible manner with that information. This privacy policy contains important information about how we use your personal information.
        </p>
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
          Collection of Information
        </h3>
        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
          We collect the following information from you when you use our apps and services:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>Contact Information such as name, email address, and phone number</li>
        <li style={{marginBottom: '0.5em'}}>Company Information such as company name, address, and industry</li>
        <li style={{marginBottom: '0.5em'}}>Job title</li>
        <li style={{marginBottom: '0.5em'}}>Country of origin</li>
        <li style={{marginBottom: '0.5em'}}>Your I.P. address</li>
        <li style={{marginBottom: '0.5em'}}>Mobile device ID</li>
        <li style={{marginBottom: '0.5em'}}>Billing Information such as credit card details and billing address</li>
        <li style={{marginBottom: '0.5em'}}>Usage Data such as the pages you visit on our website and the features you use in our apps</li>
        <li style={{marginBottom: '0.5em'}}>Information provided by you in relation to submitting a job application to us. This may at times include sensitive personal information, e.g., ethnic origin.</li>
      </ul>
      
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
          Use of Information
        </h3>

        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
          We use your information to provide and improve our services, and to communicate with you about your account and any updates or changes to our services. Specifically, we use your information for the following purposes:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>To process payments and provide billing support</li>
        <li style={{marginBottom: '0.5em'}}>To personalize and improve your experience with our services</li>
        <li style={{marginBottom: '0.5em'}}>To send you important updates and notifications about our services</li>
        <li style={{marginBottom: '0.5em'}}>To respond to your inquiries and provide customer support</li>
        <li style={{marginBottom: '0.5em'}}>To detect, prevent, and address technical issues and fraudulent activity</li>
        <li style={{marginBottom: '0.5em'}}>To provide you with better ways of accessing information from this website</li>
        <li style={{marginBottom: '0.5em'}}>To respond to specific queries you may raise regarding CW Suite and its operation.</li>
      </ul>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        Disclosure of Information
      </h3>

        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
          We do not share your personal information with third parties except in the following circumstances:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>With your consent</li>
        <li style={{marginBottom: '0.5em'}}>With service providers who help us provide our services and who are bound by confidentiality obligations</li>
        <li style={{marginBottom: '0.5em'}}>To comply with legal obligations or protect our rights and property</li>
        <li style={{marginBottom: '0.5em'}}>In connection with a merger, acquisition, or sale of assets, in which case we will require the buyer to honor this Privacy Policy</li>
      </ul>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        Our legal basis for processing
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        Consent—we only use your personal information for this purpose if you have asked us to do so. You can withdraw your consent at any time.
        For how we use your information that is collected using cookies and similar technologies, please see the “Cookies” section below.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        Security -  How do we protect your information ? 
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        We take reasonable measures to protect your personal information from unauthorized access, disclosure, and use. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Retention of Information 
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      We retain your personal information for as long as necessary to provide our services and for legitimate business purposes. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        Changes to this Privacy Policy
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
       We may update this Privacy Policy from time to time by posting the revised version on our website. Your continued use of our services after the effective date of the revised Privacy Policy constitutes your acceptance of the revised policy.
      </p>
      </div>
      <div id="cookie" className="py-5 sm:py-10 px-3 max-w-[1120px] mx-auto mt-8">
        <h2 className="text-darkBlack text-[33px] font-bold ff-inter mb-6">
          Cookie Policy
        </h2>
        <p className="text-lightgrey text-base sm:text-sm leading-[28px] mb-3">
          This Cookie Policy explains how CW Suite uses cookies and other tracking technologies when you use our apps and services.
        </p>
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
          What are Cookies?
        </h3>
        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
         Cookies are small data files that are placed on your device when you use our apps and services. They allow us to recognize your device and remember your preferences and settings.
        </p>
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
         Types of Cookies
        </h3>
        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        Cookies come in many forms. We have set out below the main types and categories of cookies that are used. This section refers to all types and categories of cookies and not just those we use on our website.        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>First- & third-party cookies: Whether a cookie is first party or third party refers to the domain placing the cookie. First-party cookies are those set by a website that is being visited by the user, the website displayed in the tab, e.g. wordpress-259857-2023269.cloudwaysapps.com. Third-party cookies are cookies that are set by a domain other than that of the website being visited by the user. If a user visits a website and another entity sets a cookie through that website, this would be a third-party cookie.</li>
        <li style={{marginBottom: '0.5em'}}>Persistent cookies: These cookies remain on a user’s device for the period of time specified in the cookie. They are activated each time that the user visits the website that created that particular cookie.</li>
        <li style={{marginBottom: '0.5em'}}>Session cookies: These cookies allow website operators to link the actions of a user during a browser session. A browser session starts when a user opens the browser window and finishes when they close the browser window. Session cookies are created temporarily. Once you close the browser, all session cookies are deleted.</li>
      </ul>
      
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        We use the following types of cookies:
        </h3>

        <ul style={{ listStyleType: 'disc', marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>Essential Cookies: These cookies are necessary for our apps and services to function properly and cannot be turned off in our systems. They include session cookies, which enable you to navigate through our apps and services, and security cookies, which help us prevent fraudulent activity.</li>
        <li style={{marginBottom: '0.5em'}}>Performance Cookies: These cookies allow us to analyze how our apps and services are used and to improve their performance. They include analytics cookies, which help us understand how users interact with our apps and services, and research cookies, which help us improve our products and services.</li>
        <li style={{marginBottom: '0.5em'}}>Functionality Cookies: These cookies allow us to remember your preferences and settings, such as your language preference and login information.</li>
        <li style={{marginBottom: '0.5em'}}>Advertising Cookies: These cookies allow us and our partners to deliver personalized ads based on your interests and browsing behavior. They include tracking cookies, which help us track the effectiveness of our advertising campaigns, and targeting cookies, which allow us to serve ads to you based on your browsing history.</li>
      </ul>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        Third-Party Cookies
      </h3>

        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        We may also use cookies and other tracking technologies from third-party service providers, such as Google Analytics, to analyze how our apps and services are used and to improve their performance. These third-party service providers may also use cookies and other tracking technologies to deliver personalized ads to you based on your browsing behavior.
        </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Third-party websites
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      Our website links to third-party sites which we do not operate or endorse. These websites may use cookies and collect your personal information in accordance with their own privacy policies. This privacy policy does not apply to third-party websites and we are not responsible for third-party websites.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Managing Cookies
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      You can manage your cookie preferences through your browser settings. However, please note that disabling cookies may affect the functionality of our apps and services.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Updates to this Policy
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      We may update this Cookie Policy from time to time by posting the revised version on our website. Your continued use of our apps and services after the effective date of the revised Cookie Policy constitutes your acceptance of the revised policy.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Under 13-year-olds
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      This website is not intended or designed to attract children under the age of 13. We do not knowingly collect personal information from or about any person under the age of 13. If you are under 13 years old and wish to ask a question or use this site in any way which requires you to submit your personal information, please get your parents or guardians to do so on your behalf.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Rights
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        You are entitled to have the following rights regarding their personal data:
      </p>
      <ul style={{ marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>1.  Right to access: The right to request and obtain a copy of their personal data that is being processed.</li>
        <li style={{marginBottom: '0.5em'}}>2.  Right to rectification: The right to request the correction of inaccurate or incomplete personal data.</li>
        <li style={{marginBottom: '0.5em'}}>3.  Right to erasure (right to be forgotten): The right to request the deletion or removal of personal data when there is no compelling reason for its continued processing.</li>
        <li style={{marginBottom: '0.5em'}}>4.  Right to restrict processing: The right to request a restriction on the processing of their personal data in certain circumstances, such as when the accuracy of the data is contested.</li>
        <li style={{marginBottom: '0.5em'}}>5.  Right to data portability: The right to request the transfer of their personal data to another data controller in a structured, commonly used, and machine-readable format.</li>
        <li style={{marginBottom: '0.5em'}}>6.  Right to object: The right to object to the processing of their personal data in certain circumstances, such as for direct marketing purposes.</li>
        <li style={{marginBottom: '0.5em'}}>7.  Right not to be subject to automated decision-making: The right to object to decisions based solely on automated processing, including profiling, which have legal or similar effects on them.</li>
      </ul>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      Please contact us using the details set out below if you would like to exercise any of these rights.
      </p>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      You also have the right to make a complaint to the supervisory authority if you’re not happy with how we’ve handled your personal information. In India, the supervisory authority is Section 43A of the IT Act.      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Contact Us
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <span style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>(privacy@cwsuite.com.)</span>
      </p>
      </div>
      <div id="terms" className="py-5 sm:py-20 px-3 max-w-[1120px] mx-auto mt-8">
        <h2 className="text-darkBlack text-[33px] font-bold ff-inter mb-6">
        Terms of Use
        </h2>
        <p className="text-lightgrey text-base sm:text-sm leading-[28px] mb-3">
        Welcome to CW Suite, an online ERP business solutions company that provides apps and services for retailers. By accessing and using our apps and services, you agree to these Terms of Use. If you do not agree with these terms, do not use our apps and services.
        </p>
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        Use of Services
        </h3>
        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        You may use our apps and services only for lawful purposes and in compliance with these Terms of Use. You may not use our apps and services to:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '4.5em' }}>
        <li  style={{marginBottom: '0.5em'}}>Violate any applicable laws or regulations</li>
        <li style={{marginBottom: '0.5em'}}>Infringe on the rights of others, including intellectual property rights</li>
        <li style={{marginBottom: '0.5em'}}>Transmit any material that is unlawful, defamatory, or obscene</li>
        <li style={{marginBottom: '0.5em'}}>Interfere with or disrupt our apps and services or networks connected to our apps and services</li>
      </ul>
      
        <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
        User Accounts
        </h3>
        <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
        To use our apps and services, you may need to create a user account. You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Intellectual Property
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      Our apps and services and all content and materials available through our apps and services are owned by CW Suite or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use any of our content or materials without our prior written consent.
      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Disclaimer of Warranties
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Our apps and services are provided "as is" and without warranty of any kind, whether express or implied. We do not guarantee that our apps and services will meet your requirements, be uninterrupted or error-free, or be free from viruses or other harmful components.      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Limitation of Liability
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      In no event will CW Suite be liable to you for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our apps and services, even if we have been advised of the possibility of such damages.      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Indemnification      
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      You agree to indemnify and hold CW Suite and its affiliates, officers, directors, employees, and agents harmless from any claim or demand, including reasonable attorneys&apos; fees, made by any third party due to or arising out of your use of our apps and services, your violation of these Terms of Use, or your violation of any rights of another.      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Modification of Terms
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      We may modify these Terms of Use at any time by posting the modified terms on our website. Your continued use of our apps and services after the effective date of the modified terms constitutes your acceptance of the modified terms.      </p>
      
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Termination      
      </h3>
      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      We may terminate your access to our apps and services at any time for any reason without prior notice.      </p>
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Governing Law      
      </h3>

      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      These Terms of Use are governed by and construed in accordance with the laws of the state where CW Suite is headquartered, without giving effect to any principles of conflicts of law.</p>      
      <h3 className="text-darkBlack text-[18px] font-bold ff-inter mb-3 mt-4">
      Contact Us     
      </h3>

      <p className="text-lightgrey text-base  sm:text-sm leading-[28px] mb-3">
      If you have any questions or concerns about these Terms of Use or our services, please contact us at <span style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>(support@cwsuite.com.) </span></p>      
      </div>
      </Layout>
    </>
  );
};

export default Info;

