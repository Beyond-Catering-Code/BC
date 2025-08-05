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

      <main className="bg-white text-blue-900 min-h-screen px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg mb-6">Last updated: August 5, 2025</p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how Beyond Catering collects, uses, and shares your information when you use our services and website. By using the website, you agree to the collection and use of information as described in this policy.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
            <h3 className="font-semibold">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined in the following conditions. The following definitions will have the same meaning regardless of whether they appear in singular or plural.
            </p>

            <h3 className="font-semibold mt-4">Definitions</h3>
            <ul className="list-disc pl-6">
              <li><strong>Account</strong>: A unique account created for you to access the service.</li>
              <li><strong>Personal Data</strong>: Any information that can identify an individual.</li>
              <li><strong>Cookies</strong>: Small files placed on your device to track your browsing activity.</li>
              <li><strong>Service</strong>: Refers to the website and its functionality.</li>
              <li><strong>Usage Data</strong>: Automatically collected data, such as IP addresses and browsing activity.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Collecting and Using Your Personal Data</h2>
            <p>
              We collect personal data, such as your name, email, and phone number, when you interact with our services. We may also collect usage data, such as IP addresses, browser types, and the pages you visit on our website.
            </p>

            <h3 className="font-semibold mt-4">Types of Data Collected</h3>
            <ul className="list-disc pl-6">
              <li><strong>Personal Data:</strong> This includes your name, email address, and phone number.</li>
              <li><strong>Usage Data:</strong> Automatically collected data like your IP address, device type, and browser interactions.</li>
              <li><strong>Cookies:</strong> Small files placed on your device to track usage patterns and improve services.</li>
            </ul>

            <h3 className="font-semibold mt-4">Tracking Technologies and Cookies</h3>
            <p>
              We use cookies and similar technologies to enhance your experience on our website, track usage patterns, and store certain preferences.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <p>
              We use your personal data to provide and improve our services, contact you regarding your use of the service, and offer promotions, updates, and information about similar services.
            </p>

            <h3 className="font-semibold mt-4">Purpose of Data Use</h3>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services.</li>
              <li>Manage your account and interactions with the website.</li>
              <li>Communicate with you about updates, promotions, and inquiries.</li>
              <li>Enhance our services based on user feedback and analysis.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Data</h2>
            <p>
              We may share your data with third-party service providers, business affiliates, or in cases of business transactions such as mergers or acquisitions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Retention of Data</h2>
            <p>
              Your personal data will be retained only as long as necessary for the purposes outlined in this policy. We may also retain usage data for internal analysis or legal compliance purposes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Transfer of Data</h2>
            <p>
              Your personal data may be processed and stored in countries outside of your jurisdiction. By using our service, you consent to the transfer of your data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Data</h2>
            <p>
              While we employ reasonable security measures, we cannot guarantee absolute protection against data breaches. We strive to use the best available practices to ensure the safety of your personal data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe we have, please contact us immediately for removal.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you via email for significant updates.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6">
              <li>Email: <a href="mailto:info@beyondcatering.ae" className="text-blue-600">info@beyondcatering.ae</a></li>
              <li>Website: <a href="https://beyondcatering.ae/contact" className="text-blue-600">Contact Us</a></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;