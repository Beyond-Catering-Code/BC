'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

// Structured Data (JSON-LD) for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Beyond Catering",
  "url": "https://beyondcatering.ae",
  "description": "Dubai’s premier luxury catering. Elevate your event with bespoke menus, gourmet chefs, and flawless service.",
  "publisher": {
    "@type": "Organization",
    "name": "Beyond Catering",
    "url": "https://beyondcatering.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beyondcatering.ae/images/logo.png"
    }
  }
};

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Beyond Catering | Dubai’s Premier Culinary Experience</title>
        <meta name="description" content="Where luxury meets flavor. Discover the artistry of bespoke catering experiences." />
        <meta name="keywords" content="Dubai catering, luxury catering, gourmet catering Dubai, bespoke menus, event catering, wedding catering Dubai, chef catering, corporate catering Dubai, premium catering Dubai, Beyond Catering" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://beyondcatering.ae/" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="preload" as="image" href="/images/Hero.webp" />
        <link rel="preload" as="image" href="/images/blog3.webp" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beyond Catering | Dubai’s Premier Culinary Experience" />
        <meta property="og:description" content="Where luxury meets flavor. Discover the artistry of bespoke catering experiences." />
        <meta property="og:url" content="https://beyondcatering.ae/" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/Hero.webp" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beyond Catering | Dubai’s Premier Culinary Experience" />
        <meta name="twitter:description" content="Where luxury meets flavor. Discover the artistry of bespoke catering experiences." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/Hero.webp" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full font-serif" aria-label="Hero Section" role="region">
        <Image
          src="/images/Hero.webp"
          alt="Beyond Catering Hero"
          fill
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
              aria-label="Book a Tasting"
            >
              Book a Tasting
            </a>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>

      {/* Outstanding Catering Section */}
      <section className="bg-white py-32 px-6 sm:px-10" aria-label="Outstanding Catering" role="region">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="text-left md:flex-1 space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight font-playfair">
                Outstanding Catering
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C7A12F] rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl leading-relaxed font-light">
              From corporate galas to private soirées, our bespoke menus and white-glove service bring sophistication to every table.
            </p>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Every event tells a story, and we craft culinary narratives that leave lasting impressions. Our team of master chefs transforms the finest ingredients into artful experiences, while our dedicated service staff ensures flawless execution from first bite to final toast.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/book"
                className="inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#C7A12F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#C7A12F] hover:to-[#B8941F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Book a Tasting Experience"
              >
                Book a Tasting Experience
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Experience our signature dishes in an intimate tasting session
              </p>
            </div>
          </div>
          <div className="md:flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-101 transition-transform duration-300">
                <Image
                  src="/images/blog3.jpg"
                  alt="Gourmet Plate"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Beyond Catering Section */}
      <section className="py-28 px-6 sm:px-10 bg-gradient-to-b from-[#F0F4F8] to-[#FAFAF9] text-gray-900" aria-label="Why Beyond Catering" role="region">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Why Beyond Catering?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 italic max-w-2xl mx-auto mb-16 leading-relaxed">
            Elegant cuisine. Timeless service. Discover what makes us Dubai’s trusted name in luxury catering.
          </p>
          <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '👨‍🍳',
                title: 'Master Chefs',
                desc: 'Culinary artists with Michelin-starred pedigree delivering food with finesse.',
              },
              {
                icon: '🥗',
                title: 'Seasonal Ingredients',
                desc: 'Each dish begins with thoughtfully selected, market-fresh produce.',
              },
              {
                icon: '📋',
                title: 'Tailored Menus',
                desc: 'Every course designed for your theme, guests, and vision with no templates.',
              },
              {
                icon: '🛎️',
                title: 'Flawless Service',
                desc: 'Friendly, discreet, and prepared for anything. Our team ensures elegance flows seamlessly.',
              },
              {
                icon: '⏱️',
                title: 'Punctual Execution',
                desc: 'Precision that guarantees timely setup and service every time.',
              },
              {
                icon: '🎯',
                title: 'Details Obsessed',
                desc: 'From plating finesse to scent and ambiance, no element is left unconsidered.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FAFAF9] border border-gray-200 rounded-2xl px-8 py-10 text-center shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06)] hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="text-5xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-16 px-6" aria-label="Trusted By" role="region">
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
                className="h-[110px] sm:h-[120px] bg-white rounded-xl shadow-sm flex items-center justify-center px-6 py-4 transition-transform hover:shadow-lg"
              >
                <Image
                  src={`/clients/${file}`}
                  alt={file.replace(/[-_]/g, ' ').replace(/\.\w+$/, '') + ' logo'}
                  width={150}
                  height={70}
                  className="object-contain max-h-[60px] w-auto"
                  quality={85}
                  sizes="150px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F0F6FB] py-24 px-6" aria-label="Testimonials" role="region">
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
                className="bg-white p-6 rounded-xl shadow border border-blue-100 text-left flex flex-col items-start gap-4 hover:shadow-lg"
              >
                <div className="text-yellow-400 text-lg" aria-label="5 star review">★★★★★</div>
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