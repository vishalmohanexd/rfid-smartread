import React,{useEffect, useState} from "react";
import PageSEO from "../components/common/PageSEO";
import Faq from "../components/Home/Faq";
import PricingHeader from "../components/pricing/PricingHeader";
import PricingTabs from "../components/pricing/PricingTabs";
import Layout from "../hoc/Layout";
import { PricingFaqData } from "../components/common/Helper";
import { toast } from 'react-hot-toast';
import { XIcon } from '@heroicons/react/outline'; 
import { useRouter } from 'next/router';
import {MetaData} from "../components/common/Helper"


const Pricing = ({subscriptionApps}) => {
  const [country,setCountry] = useState("")
  const [countryWiseData,setcountryWiseData] = useState([])
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}pricing`

  const router = useRouter();
  const { email } = router.query;
  
  useEffect(()=>{
    callfunction()
  },[])

  useEffect(()=>{
    getCountry()
  },[country])

  const getCountry = async () =>{
    const countryResponse = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
    const countryData = await countryResponse.json();
    setCountry(countryData.country)
    if (countryData.country === "India") {
      setcountryWiseData(subscriptionApps["India"])
    } else {
      setcountryWiseData(subscriptionApps["United States"])
    }
  }

  const removeToast = () => {
    toast.dismiss();
  };
  
    const callfunction = () => {
      setTimeout(() => {
        toast.success(
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src="/images/toastIcon.png" alt="Logo" style={{ marginLeft:'-13px',marginTop:'4px',width: '40px', marginRight: '6px' }} />
            <div style={{marginRight:'10px'}}>&nbsp;Please select an app to get started&nbsp;</div>
          </div>,
          {
            position: 'top-center',
            duration: 6000,
            closable: true,
            style: {
              marginTop: '80px',
              background: '#E4EAFA',
              color: '#101828',
              height: '55px',
              width:'400px !important',
              maxWidth:'500px ! important',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0px 15px',
              paddingLeft: '0px',
            },
            icon: (
              <XIcon
                onClick={removeToast}
                style={{
                  marginLeft: 'auto',
                  cursor: 'pointer',
                  position: 'absolute',
                  marginLeft: '93%',
                  marginBottom:'22px'
                }}
                className="h-5 w-5 text-[#101828] custom-close-icon"
              />
            ),
          }
        );
      }, 2000);
    };

  return (
    <>
      <PageSEO title="Pricing" canonicalTag={canonicalTag} metatitleTag={MetaData[8].titleTag}
      metaDes={MetaData[8].metaDescription} />
      <Layout>
      <PricingHeader />
        <PricingTabs subscriptionApps={countryWiseData} email={email} country={country} />
        <Faq feqData ={PricingFaqData} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_Plans}find`;
    let reQBody = {
      "collection":"product_pricing",
      "database":process.env.NEXT_PUBLIC_MONGO_DB_DATABASE,
      "dataSource":process.env.NEXT_PUBLIC_MONGO_DB_DATASOURCE,
      "filter": {}
    }
    const options = {
      method: 'POST',
      body:JSON.stringify(reQBody),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers":"*",
        "api-key":`${process.env.NEXT_PUBLIC_MONGO_DB_API_KEY}`
      }
    };
    
    const response = await fetch(url, options);
    const data = await response.json();
    const pln = data.documents
    const data2 = pln.length > 0 ? JSON.parse(pln[0]?.pricing_json) :[]
    return {
      props: {
        subscriptionApps:data2,
      },
      revalidate: 900 
    };
}

export default Pricing;

