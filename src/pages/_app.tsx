import '@/styles/globals.css';
import '@fontsource/playfair-display/600.css'; // weight 600
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}