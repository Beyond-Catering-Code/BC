'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Beyond Catering | Dubai’s Premier Culinary Experience</title>
        <meta
          name="description"
          content="Where luxury meets flavor. Discover the artistry of bespoke catering experiences."
        />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="preload" as="image" href="/images/Hero.JPG" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full font-serif">
        <Image
          src="/images/Hero.JPG"
          alt="Beyond Catering Hero"
          fill
          priority
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
          <div className="opacity-0 translate-y-10 animate-[fadeUp_1.2s_ease-out_1s_forwards] max-w-3xl mx-auto">
            <h1 className="text-white text-[2rem] sm:text-5xl md:text-6xl font-bold leading-tight">
              Elevate Your Event<br />With Culinary Perfection
            </h1>
            <p className="mt-5 text-white/90 text-base sm:text-xl font-medium leading-relaxed">
              Gourmet experiences crafted for Dubai’s elite gatherings.
            </p>
            <a
              href="/book"
              className="mt-6 inline-block bg-white text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-200 transition"
            >
              Book a Tasting
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Why Section */}
      <section className="bg-[#F0F6FB] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 font-serif">
            Why Dubai Chooses Beyond Catering
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            It’s not just food. It’s the feeling your guests remember. At Beyond Catering, we craft unforgettable experiences with every plate.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
            {[
              {
                title: '5-Star Chefs, Curated Menus',
                text: 'From traditional Emirati flavors to modern fusion, our team builds every menu from scratch — customized to your vision, guests, and event type.',
              },
              {
                title: 'Flawless Presentation',
                text: 'Each dish is plated like artwork. Every table setting, tray, and utensil reflects our obsession with visual perfection, worthy of Dubai’s top venues.',
              },
              {
                title: 'Trusted by the Best',
                text: 'We’ve catered at Burj Khalifa, celebrity weddings, and corporate events at Emirates Towers. No matter the event, our quality never wavers.',
              },
            ].map(({ title, text }, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4 items-start">
                <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-serif">
            Trusted By
          </h2>
          <p className="text-gray-500 mb-10">Dubai’s top names in hospitality and enterprise</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
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
                className="h-[110px] sm:h-[120px] bg-white rounded-xl shadow-sm flex items-center justify-center px-6 py-4 transition-transform transform hover:scale-[1.05]"
              >
                <Image
                  src={`/clients/${file}`}
                  alt={file.split('.')[0]}
                  width={150}
                  height={70}
                  className="object-contain max-h-[60px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F0F6FB] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 font-serif">
            Client Impressions
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Emaar Events',
                quote: 'Professionalism and perfection in every bite.',
              },
              {
                name: 'Luxury Private Client',
                quote: 'The most elegant dining experience we’ve had in Dubai.',
              },
              {
                name: 'Global Expo Team',
                quote: 'Seamless service and unforgettable cuisine.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow border border-blue-100 text-left flex flex-col items-start gap-4"
              >
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <p className="text-gray-700 italic">“{item.quote}”</p>
                <span className="text-blue-900 font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}