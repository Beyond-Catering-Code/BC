import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Beyond Catering</title>
        <meta name="description" content="Learn how Beyond Catering collects, uses, and protects your personal information." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/privacy-policy" />
      </Head>

      <main className="relative bg-white min-h-screen px-4 py-10 flex items-center justify-center">
        <div className="w-full max-w-3xl md:max-w-4xl bg-white/95 rounded-2xl shadow-xl p-6 md:p-12 mt-20 mb-12">
          {/* Sticky Title and Date */}
          <div className="sticky top-0 bg-white/90 pt-4 pb-6 z-10 border-b border-blue-100 mb-6">
            <h1 className="text-4xl font-bold text-blue-900 mb-2 tracking-tight text-center">Privacy Policy</h1>
            <p className="text-base text-blue-700 text-center">Last updated: August 5, 2025</p>
          </div>

          {/* SECTION NAVIGATION (DESKTOP ONLY) */}
          <nav className="hidden md:flex justify-center gap-6 mb-10 text-blue-800 text-sm font-semibold">
            <a href="#introduction" className="hover:underline focus:underline">Introduction</a>
            <a href="#interpretation" className="hover:underline focus:underline">Definitions</a>
            <a href="#data" className="hover:underline focus:underline">Your Data</a>
            <a href="#usage" className="hover:underline focus:underline">How We Use</a>
            <a href="#sharing" className="hover:underline focus:underline">Sharing</a>
            <a href="#retention" className="hover:underline focus:underline">Retention</a>
            <a href="#security" className="hover:underline focus:underline">Security</a>
            <a href="#children" className="hover:underline focus:underline">Children</a>
            <a href="#contact" className="hover:underline focus:underline">Contact</a>
          </nav>

          {/* CONTENT */}
          <div className="space-y-10">
            <section id="introduction">
              <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                <span>Introduction</span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" />
              </h2>
              <p className="text-blue-900/90">
                This Privacy Policy explains how Beyond Catering collects, uses, and shares your information when you use our services and website. By using the website, you agree to the collection and use of information as described in this policy.
              </p>
            </section>

            <section id="interpretation">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Interpretation and Definitions</h2>
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Interpretation</h3>
              <p className="text-blue-900/90">
                The words of which the initial letter is capitalized have meanings defined in the following conditions. The following definitions will have the same meaning regardless of whether they appear in singular or plural.
              </p>
              <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-1">Definitions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-none space-y-2">
                  <li>
                    <span className="font-bold text-blue-900">Account:</span>
                    <span className="ml-1 text-blue-900/90">A unique account created for you to access the service.</span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-900">Personal Data:</span>
                    <span className="ml-1 text-blue-900/90">Any information that can identify an individual.</span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-900">Cookies:</span>
                    <span className="ml-1 text-blue-900/90">Small files placed on your device to track your browsing activity.</span>
                  </li>
                </ul>
                <ul className="list-none space-y-2">
                  <li>
                    <span className="font-bold text-blue-900">Service:</span>
                    <span className="ml-1 text-blue-900/90">Refers to the website and its functionality.</span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-900">Usage Data:</span>
                    <span className="ml-1 text-blue-900/90">Automatically collected data, such as IP addresses and browsing activity.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="data">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Collecting and Using Your Personal Data</h2>
              <p className="text-blue-900/90">
                We collect personal data, such as your name, email, and phone number, when you interact with our services. We may also collect usage data, such as IP addresses, browser types, and the pages you visit on our website.
              </p>
              <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-1">Types of Data Collected</h3>
              <ul className="list-disc pl-6 text-blue-900/90 space-y-1">
                <li><span className="font-bold">Personal Data:</span> This includes your name, email address, and phone number.</li>
                <li><span className="font-bold">Usage Data:</span> Automatically collected data like your IP address, device type, and browser interactions.</li>
                <li><span className="font-bold">Cookies:</span> Small files placed on your device to track usage patterns and improve services.</li>
              </ul>
              <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-1">Tracking Technologies and Cookies</h3>
              <p className="text-blue-900/90">
                We use cookies and similar technologies to enhance your experience on our website, track usage patterns, and store certain preferences.
              </p>
            </section>

            <section id="usage">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">How We Use Your Data</h2>
              <p className="text-blue-900/90">
                We use your personal data to provide and improve our services, contact you regarding your use of the service, and offer promotions, updates, and information about similar services.
              </p>
              <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-1">Purpose of Data Use</h3>
              <ul className="list-disc pl-6 text-blue-900/90 space-y-1">
                <li>Provide and maintain our services.</li>
                <li>Manage your account and interactions with the website.</li>
                <li>Communicate with you about updates, promotions, and inquiries.</li>
                <li>Enhance our services based on user feedback and analysis.</li>
              </ul>
            </section>

            <section id="sharing">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Sharing Your Data</h2>
              <p className="text-blue-900/90">
                We may share your data with third-party service providers, business affiliates, or in cases of business transactions such as mergers or acquisitions.
              </p>
            </section>

            <section id="retention">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Retention of Data</h2>
              <p className="text-blue-900/90">
                Your personal data will be retained only as long as necessary for the purposes outlined in this policy. We may also retain usage data for internal analysis or legal compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Transfer of Data</h2>
              <p className="text-blue-900/90">
                Your personal data may be processed and stored in countries outside of your jurisdiction. By using our service, you consent to the transfer of your data.
              </p>
            </section>

            <section id="security">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Security of Your Data</h2>
              <p className="text-blue-900/90">
                While we employ reasonable security measures, we cannot guarantee absolute protection against data breaches. We strive to use the best available practices to ensure the safety of your personal data.
              </p>
            </section>

            <section id="children">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Children's Privacy</h2>
              <p className="text-blue-900/90">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe we have, please contact us immediately for removal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Links to Other Websites</h2>
              <p className="text-blue-900/90">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Changes to This Privacy Policy</h2>
              <p className="text-blue-900/90">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you via email for significant updates.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Contact Us</h2>
              <p className="text-blue-900/90">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 text-blue-900/90">
                <li>Email: <a href="mailto:info@beyondcatering.ae" className="text-blue-600 hover:underline">info@beyondcatering.ae</a></li>
                <li>Website: <a href="https://beyondcatering.ae/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;