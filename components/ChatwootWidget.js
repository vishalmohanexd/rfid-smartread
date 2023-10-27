import React from 'react';

class ChatwootWidget extends React.Component {
  componentDidMount () {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', 
      locale: 'en', 
      type: 'standard', 
    };

    (function(d,t) {
      var BASE_URL=`${process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL}`;
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      s.parentNode.insertBefore(g,s);
      g.async=!0;
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken:`${process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN}`,
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }

  render () {
    return null;
  }
}

export default ChatwootWidget