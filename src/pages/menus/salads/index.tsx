'use client';

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Salads - Beyond Catering",
  "description": "Fresh and premium salads crafted with the finest ingredients for Dubai events and luxury gatherings.",
  "url": "https://beyondcatering.ae/menus/salads",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "Beyond Catering",
    "url": "https://beyondcatering.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beyondcatering.ae/favicon.ico"
    }
  }
};

const MenusPage = () => {
  return (
    <>
      <Head>
        <title>Salads - Beyond Catering | Fresh & Premium Event Salads Dubai</title>
        <meta
          name="description"
          content="Salads by Beyond Catering: Fresh, premium salads crafted with artisan ingredients for Dubai events and gatherings. Explore our signature salad menu."
        />
        <meta
          name="keywords"
          content="Salads, Beyond Catering, Dubai catering, event salads, premium salads, wedding catering Dubai, luxury salads UAE, healthy menu"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/salads" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Salads - Beyond Catering | Fresh & Premium Event Salads Dubai" />
        <meta property="og:description" content="Fresh, premium salads for Dubai events and gatherings. Signature menu, artisan ingredients." />
        <meta property="og:url" content="https://beyondcatering.ae/menus/salads" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/saladbackground.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salads - Beyond Catering | Fresh & Premium Event Salads Dubai" />
        <meta name="twitter:description" content="Signature salads for Dubai events and gatherings. Fresh, premium ingredients." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/saladbackground.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/menus/salad.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] tracking-wide font-semibold text-gold mb-6 leading-tight">
            Fresh & Premium Salads
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Curated for weddings, galas, and elevated gatherings, our salads strike the perfect balance of flavor, freshness, and finesse.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR SALADS */}
      <section
        className="w-full bg-[#F6EFE6] px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Why Choose Our Salads"
        role="region"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
                Why Choose Our Salads?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Each salad is made with market-fresh produce, artisan ingredients, and plated to perfection, delivering a premium start or complement to any meal.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                From Mediterranean classics to vibrant modern pairings, our salad menu offers light luxury that satisfies both palate and presentation.
              </p>
              <Link
                href="/book-tasting"
                className="inline-block bg-[#D4AF37] text-white text-base sm:text-lg px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all hover:bg-[#b68c1f]"
                aria-label="Book a Tasting Experience"
              >
                Book a Tasting Experience
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
              <Image
                src="/images/saladbackground.webp"
                alt="Premium salad display for Dubai event catering"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section
        className="bg-[#FFFDF7] px-4 sm:px-6 pt-16 sm:pt-24 pb-6 sm:pb-10"
        aria-label="Explore Signature Salads"
        role="region"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Salads
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection designed to complement every event, plated with elegance and bursting with flavor.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        className="bg-[#FFFDF7] pb-20 sm:pb-32 px-4 sm:px-10 font-sans"
        aria-label="Signature Salad Menu"
        role="main"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              title: 'Greek Salad',
              desc: 'Feta cheese, cucumbers, baby gem, capsicum, tomato, and olives.',
            },
            {
              title: 'Burrata Salad',
              desc: 'Mixed tomatoes, candied walnuts, grilled nectarine, pickled red onion, arugula & balsamic vinaigrette.',
            },
            {
              title: 'Quinoa Beetroot Salad',
              desc: 'Quinoa, orange segments, green onions, feta cheese, and green goddess vinaigrette.',
            },
            {
              title: 'Watermelon Salad',
              desc: 'Feta, cherry tomatoes, toasted almonds, basil, and mint vinaigrette.',
            },
            {
              title: 'Legumes Salad',
              desc: 'Lentils, black-eyed peas, pickled mirepoix, raisins, hazelnuts & white balsamic dressing.',
            },
            {
              title: 'Roasted Chickpea & Spinach Salad',
              desc: 'Roasted pumpkin, slivered almonds, and maple balsamic dressing.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#F1EADB] rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-all duration-300 ease-in-out"
              role="article"
              aria-label={item.title}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1120] mb-2">
                {item.title}
              </h3>
              <div className="w-10 sm:w-12 h-[2px] bg-[#D4AF37] mx-auto mb-4 rounded-full" />
              <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MenusPage;