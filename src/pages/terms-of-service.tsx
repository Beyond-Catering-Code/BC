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

      <main className="relative bg-white min-h-screen px-4 py-10 flex items-center justify-center">
        <div className="w-full max-w-3xl md:max-w-4xl bg-white/95 rounded-2xl shadow-xl p-6 md:p-12 mt-20 mb-12">
          {/* Sticky Title and Date */}
          <div className="sticky top-0 bg-white/90 pt-4 pb-6 z-10 border-b border-blue-100 mb-6">
            <h1 className="text-4xl font-bold text-blue-900 mb-2 tracking-tight text-center">Terms &amp; Conditions</h1>
            <p className="text-base text-blue-700 text-center">Last updated: August 5, 2025</p>
          </div>

          {/* SECTION NAVIGATION (DESKTOP ONLY) */}
          <nav className="hidden md:flex justify-center gap-6 mb-10 text-blue-800 text-sm font-semibold">
            <a href="#introduction" className="hover:underline focus:underline">Introduction</a>
            <a href="#ip-rights" className="hover:underline focus:underline">Intellectual Property</a>
            <a href="#restrictions" className="hover:underline focus:underline">Restrictions</a>
            <a href="#liability" className="hover:underline focus:underline">Content Liability</a>
            <a href="#reservation" className="hover:underline focus:underline">Reservation of Rights</a>
            <a href="#removal" className="hover:underline focus:underline">Removal of Links</a>
            <a href="#disclaimer" className="hover:underline focus:underline">Disclaimer</a>
          </nav>

          <div className="space-y-10">
            <section id="introduction">
              <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                <span>Introduction</span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" />
              </h2>
              <p className="text-blue-900/90 text-lg">
                Welcome to Beyond Catering! These terms and conditions outline the rules and regulations for the use of Beyond Catering’s Website, located at www.beyondcatering.ae. By accessing this website, you accept these terms and conditions in full. If you do not agree to all of the terms and conditions stated on this page, please refrain from using the website.
              </p>
            </section>

            <section id="ip-rights">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Intellectual Property Rights</h2>
              <p className="text-blue-900/90">
                Except for the content you own, under these Terms, Beyond Catering and/or its licensors hold all intellectual property rights and materials contained on this Website. You are granted a limited license solely for the purpose of viewing the material on this Website.
              </p>
            </section>

            <section id="restrictions">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Restrictions</h2>
              <p className="text-blue-900/90">You are specifically prohibited from the following:</p>
              <ul className="list-disc pl-6 text-blue-900/90 space-y-1">
                <li>Publishing any website material in any media;</li>
                <li>Selling, sub-licensing, or otherwise commercializing any website material;</li>
                <li>Publicly performing or displaying any website material;</li>
                <li>Using this Website in any way that may damage the Website;</li>
                <li>Using this Website in any way that impacts user access to the Website;</li>
                <li>Using this Website in violation of applicable laws and regulations, or in a way that could cause harm to the Website, or any person or business entity;</li>
                <li>Engaging in any data mining, data harvesting, or any similar activity in relation to this Website.</li>
              </ul>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Content Liability</h2>
              <p className="text-blue-900/90">
                We assume no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against any claims arising from or based on your website. No links may appear on any page on your website or within any context containing content that may be interpreted as libelous, obscene, or criminal, or that infringes or advocates the infringement of third-party rights.
              </p>
            </section>

            <section id="reservation">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Reservation of Rights</h2>
              <p className="text-blue-900/90">
                We reserve the right to request the removal of all links or any particular link to our Website. You agree to promptly remove any links upon request. We also reserve the right to amend these terms and conditions and the linking policy at any time. By continuing to link to our Website, you agree to comply with and abide by these linking terms and conditions.
              </p>
            </section>

            <section id="removal">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Removal of Links from Our Website</h2>
              <p className="text-blue-900/90">
                If you encounter any link on our Website that you find offensive for any reason, feel free to contact us at any time. We will consider requests for link removal but are under no obligation to do so or to respond directly.
              </p>
            </section>

            <section id="disclaimer">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Disclaimer</h2>
              <p className="text-blue-900/90">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions regarding our website and the use of this website (including any warranties implied by law concerning satisfactory quality, fitness for a particular purpose, and/or the use of reasonable care and skill).
              </p>
              <ul className="list-disc pl-6 text-blue-900/90 space-y-1">
                <li>Limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>Limit any of our or your liabilities in ways that are not allowed by applicable law;</li>
                <li>Exclude any of our or your liabilities that cannot be excluded under applicable law.</li>
              </ul>
              <p className="text-blue-900/90">
                The limitations and exclusions of liability described in this section and elsewhere in the disclaimer:
              </p>
              <ul className="list-disc pl-6 text-blue-900/90 space-y-1">
                <li>Are subject to the preceding paragraph; and</li>
                <li>Apply to all liabilities arising under the disclaimer or in connection with its subject matter, including liabilities arising in contract, tort (including negligence), and for breach of statutory duty.</li>
              </ul>
              <p className="text-blue-900/90">
                If the website and its content and services are provided free of charge, we will not be liable for any loss or damage of any kind.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsConditions;