import Head from 'next/head';
import Navbar from '@/components/Navbar';

const TermsConditions = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Beyond Catering</title>
        <meta name="description" content="Terms and conditions for using Beyond Catering services." />
        <meta name="keywords" content="terms and conditions, Beyond Catering, Dubai catering, event catering, luxury catering" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/terms-conditions" />
      </Head>

      <Navbar />

      <main className="bg-white text-blue-900 min-h-screen px-6 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">Terms & Conditions</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg">
              Welcome to Beyond Catering! These terms and conditions outline the rules and regulations for the use of Beyond Catering’s Website, located at www.beyondcatering.ae. By accessing this website, you accept these terms and conditions in full. If you do not agree to all of the terms and conditions stated on this page, please refrain from using the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p>
              Except for the content you own, under these Terms, Beyond Catering and/or its licensors hold all intellectual property rights and materials contained on this Website. You are granted a limited license solely for the purpose of viewing the material on this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Restrictions</h2>
            <p>You are specifically prohibited from the following:</p>
            <ul className="list-disc pl-6">
              <li>Publishing any website material in any media;</li>
              <li>Selling, sub-licensing, or otherwise commercializing any website material;</li>
              <li>Publicly performing or displaying any website material;</li>
              <li>Using this Website in any way that may damage the Website;</li>
              <li>Using this Website in any way that impacts user access to the Website;</li>
              <li>Using this Website in violation of applicable laws and regulations, or in a way that could cause harm to the Website, or any person or business entity;</li>
              <li>Engaging in any data mining, data harvesting, or any similar activity in relation to this Website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content Liability</h2>
            <p>
              We assume no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against any claims arising from or based on your website. No links may appear on any page on your website or within any context containing content that may be interpreted as libelous, obscene, or criminal, or that infringes or advocates the infringement of third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Reservation of Rights</h2>
            <p>
              We reserve the right to request the removal of all links or any particular link to our Website. You agree to promptly remove any links upon request. We also reserve the right to amend these terms and conditions and the linking policy at any time. By continuing to link to our Website, you agree to comply with and abide by these linking terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Removal of Links from Our Website</h2>
            <p>
              If you encounter any link on our Website that you find offensive for any reason, feel free to contact us at any time. We will consider requests for link removal but are under no obligation to do so or to respond directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions regarding our website and the use of this website (including any warranties implied by law concerning satisfactory quality, fitness for a particular purpose, and/or the use of reasonable care and skill).
            </p>
            <ul className="list-disc pl-6">
              <li>Limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>Limit any of our or your liabilities in ways that are not allowed by applicable law;</li>
              <li>Exclude any of our or your liabilities that cannot be excluded under applicable law.</li>
            </ul>
            <p>
              The limitations and exclusions of liability described in this section and elsewhere in the disclaimer:
            </p>
            <ul className="list-disc pl-6">
              <li>Are subject to the preceding paragraph; and</li>
              <li>Apply to all liabilities arising under the disclaimer or in connection with its subject matter, including liabilities arising in contract, tort (including negligence), and for breach of statutory duty.</li>
            </ul>
            <p>
              If the website and its content and services are provided free of charge, we will not be liable for any loss or damage of any kind.
            </p>
          </section>
        </div>
      </main>

    </>
  );
};

export default TermsConditions;