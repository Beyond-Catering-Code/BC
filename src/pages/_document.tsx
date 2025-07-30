// _document.tsx (FIXED)
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* GTM NOSCRIPT fallback */}
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-PCX4MJSM"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}