import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <Script
    id = 'facebook-pixel'
    dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '243597755142259');
        fbq('track', 'PageView');`
    }}
    >
    </Script>

    <Script async src='https://www.googletagmanager.com/gtag/js?id=AW-11184257379' />
   
    <Script
    id = 'google-gtag'
    dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-11184257379');`
    }}
    >
    </Script>
    </>
  )
}
