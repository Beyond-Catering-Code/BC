'use client';

import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Menus - Beyond Catering",
  "description": "Explore curated menus for premium catering experiences in Dubai, including canapés, salads, mains, platters, and more.",
  "url": "https://beyondcatering.ae/menus",
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

const menuSections = [
  {
    title: 'Salads',
    description:
      'Buffet-style, light and fresh. The perfect vegetarian or side pairing for your main course. From Kale Caesar to Roasted Chickpea, every salad is handcrafted to impress.',
    link: '/menus/salads',
    image: 'salad.jpg',
  },
  {
    title: 'Cold Canapés',
    description:
      'Elegant and bite-sized. Ideal for the beginning of your event. Choose from vibrant tomato tartlets to indulgent crab bites, all served chilled.',
    link: '/menus/cold-canapes',
    image: 'cold-canapes.jpg',
  },
  {
    title: 'Hot Canapés',
    description:
      'Fresh from the kitchen and designed to delight. Our hot canapés bring bold flavors and heartwarming presentation to any event.',
    link: '/menus/hot-canapes',
    image: 'hot-canapes.jpg',
  },
  {
    title: 'Sweet Canapés',
    description:
      'End your event on a sweet note. These handcrafted bites are the perfect finale to your celebration. Indulgent, elegant, unforgettable.',
    link: '/menus/sweet-canapes',
    image: 'sweetCanapes.jpg',
  },
  {
    title: 'Main Course',
    description:
      'From roasted chicken to slow-braised brisket and seafood paella. Our curated mains balance flavor, nutrition, and portion for a standout dining experience.',
    link: '/menus/main-course',
    image: 'main-course.jpg',
  },
  {
    title: 'Platters',
    description:
      'Perfect for sharing. Artisanal cheese boards, mezze spreads, burger baskets, and more. Receive your guests with an impressive selection.',
    link: '/menus/platters',
    image: 'platter.jpg',
  },
  {
    title: 'Bowl & Fork',
    description:
      'A great way to receive your guests after the canapé service. Nice portions inside our delight bowls, from truffle pasta to miso black cod.',
    link: '/menus/bowl-fork',
    image: 'bowl.jpg',
  },
];

const MenusPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Head>
        <title>Menus - Beyond Catering | Curated Event Menus Dubai</title>
        <meta
          name="description"
          content="Explore curated menus designed for premium catering experiences in Dubai. From elegant canapés to full-course meals, every menu is crafted to impress."
        />
        <meta
          name="keywords"
          content="Menus, Beyond Catering, Dubai catering, event menus, canapés, main course, salads, platters, luxury catering Dubai, menu selection"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menus - Beyond Catering | Curated Event Menus Dubai" />
        <meta property="og:description" content="Explore curated event menus for Dubai. Elegant canapés, salads, mains, platters, and more." />
        <meta property="og:url" content="https://beyondcatering.ae/menus" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/menus-hero.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menus - Beyond Catering | Curated Event Menus Dubai" />
        <meta name="twitter:description" content="Signature event menus for Dubai. Salads, canapés, mains, and more." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/menus-hero.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      {/* HERO SECTION */}
      <section
        className="w-full bg-[#0B1120] text-white px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Menus Overview"
        role="region"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-[Playfair Display] mb-6">
            Our Menus
          </h1>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full" />
          <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            Crafted to impress, designed to delight, our menus are fully customized and built around your event vision,
            delivering a seamless culinary experience from refined canapés to full-course presentations.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        ref={scrollRef}
        className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-10 font-sans"
        aria-label="Menu Categories"
        role="main"
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16 sm:space-y-24">
            {menuSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col-reverse items-center gap-10 sm:gap-12 md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                role="region"
                aria-label={section.title}
              >
                <div className="md:w-1/2 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-[Playfair Display]">
                    {section.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                    {section.description}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={section.link}
                      className="inline-block bg-[#0d1528] text-white hover:bg-blue-900 text-base sm:text-lg px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition font-[Playfair Display]"
                      aria-label={`View ${section.title} Menu`}
                    >
                      View {section.title}
                    </Link>
                  </div>
                </div>

                <div className="md:w-1/2 h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-gray-200 relative">
                  <Image
                    src={`/menus/${section.image}`}
                    alt={`${section.title} - menu preview`}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MenusPage;