import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond Catering | Dubai’s Top Catering Experience</title>
        <meta name="description" content="Discover why Beyond Catering is trusted by Dubai’s top names." />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="preload" as="image" href="/images/Hero.JPG" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="/images/Hero.JPG"
          alt="Beyond Catering Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 sm:bg-black/20" />

        {/* Scroll Arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Why Dubai Chooses Beyond Catering
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            It’s not just food. It’s the feeling your guests remember. At Beyond Catering, we don’t just cook — we craft unforgettable experiences.
          </p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 text-left">
            {[
              {
                title: '5-Star Chefs, Curated Menus',
                text: 'From traditional Emirati flavors to modern fusion, our team builds every menu from scratch — customized to your vision, guests, and event type.',
              },
              {
                title: 'Flawless Presentation',
                text: 'Each dish is plated like artwork. Every table setting, tray, and utensil reflects our obsession with visual perfection — worthy of Dubai’s top venues.',
              },
              {
                title: 'Trusted by the Best',
                text: 'We’ve catered lunches at Burj Khalifa, celebrity weddings, and corporate events at Emirates Towers. But no matter the event — our quality never wavers.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Our Prestige Clients
          </h2>
          <p className="text-gray-500 mb-10">Trusted by leading organizations</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
            {[
              'Dubai_municipality.jpg',
              'RTA_Dubai_logo.png',
              'innov8.jpg',
              'pwc.png',
              'kitensurf.png',
              'GDRFA.png',
              'flydubai.png',
              'vertigo.jpg',
            ].map((file, i) => (
              <div
                key={i}
                className="bg-white hover:scale-105 hover:shadow-md transition-all duration-300 p-4 rounded-lg cursor-pointer"
              >
                <img
                  src={`/clients/${file}`}
                  alt={file.split('.')[0]}
                  className="mx-auto max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}