import '@/styles/globals.css'; 
import '@fontsource/playfair-display/600.css'; // weight 600
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';  // Import Navbar
import Footer from '@/components/Footer';  // Import Footer

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />  {/* Global Navbar */}
      <main>
        <Component {...pageProps} />  {/* Page-specific content */}
      </main>
      <Footer />  {/* Global Footer */}
    </>
  );
}