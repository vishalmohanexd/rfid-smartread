import { useEffect,useState } from 'react';
import { initGA, logPageView } from '../components/common/analytics'
import Script from 'next/script'
// import zipy from 'zipyai';
import ChatwootWidget from '../components/ChatwootWidget'
import { Toaster } from 'react-hot-toast';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


import "../styles/globals.css";
import "../styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  // zipy.init('be83af7d');
  useEffect(()=>{
    initGA(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`)
    logPageView()

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`, {
      page_path: window.location.pathname,
    });

  },[])
  return (
    <>
  <Toaster position="top-right" reverseOrder={false} />
  <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}/>
  <ChatwootWidget />
  <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}>
  <Component {...pageProps} />
  </GoogleReCaptchaProvider>
  {/* <Script strategy="afterInteractive" src="/ga.js"/> */}
    
  </>
  )

}

export default MyApp;