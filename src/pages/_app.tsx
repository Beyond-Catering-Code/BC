import '@/styles/globals.css';
import '@fontsource/playfair-display/600.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Define window.dataLayer BEFORE GTM loads */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime()
          });
        `}
      </Script>

      {/* Load GTM script */}
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PCX4MJSM"
        strategy="afterInteractive"
      />

      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}