import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { BadgeCheck, Users, ChefHat, Star, Trophy, Target } from 'lucide-react';
import Footer from '@/components/Footer';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Us - Beyond Catering",
  "description": "Learn about Beyond Catering, Dubai’s premier catering service dedicated to creating unforgettable culinary experiences.",
  "url": "https://beyondcatering.ae/about",
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

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Beyond Catering</title>
        <meta name="description" content="Learn about Beyond Catering, Dubai’s premier catering service dedicated to creating unforgettable culinary experiences." />
        <meta name="keywords" content="About Beyond Catering, Dubai catering, catering company Dubai, event catering, luxury catering, chef team Dubai" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/about" />
        <link rel="icon" type="image/png" href="/images/logo.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - Beyond Catering" />
        <meta property="og:description" content="Dubai’s premier catering service dedicated to creating unforgettable culinary experiences." />
        <meta property="og:url" content="https://beyondcatering.ae/about" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/private.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Beyond Catering" />
        <meta name="twitter:description" content="Dubai’s top catering team — discover our story, vision, and values." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/private.webp" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main className="bg-white text-gray-800" id="main-content" role="main">
        {/* Hero Section */}
        <section
          className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white overflow-hidden"
          aria-label="About Beyond Catering Hero"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/private.webp"
              alt="Our team at a catering event"
              fill
              className="object-cover"
              quality={85}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhoCAABXRUJQVlA4WAoAAAASAAAAEAAA"
              priority
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          </div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">About Beyond Catering</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Crafting Dubai’s Most Memorable Culinary Narratives, One Event at a Time.</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6" aria-label="Our Story">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story: A Passion for Perfection</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in the heart of Dubai, Beyond Catering was born from a simple yet powerful idea: that every meal should be an experience. Our founders, a team of seasoned chefs and event visionaries, saw a need for a catering service that went beyond just food. They envisioned a company that would blend culinary artistry with flawless execution, transforming ordinary events into extraordinary memories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our humble beginnings with a small, dedicated team, we have grown into one of Dubai’s most trusted catering partners. We have served royalty, celebrated with global brands, and added a touch of magic to countless private gatherings. Yet, our core mission remains unchanged: to delight your guests and exceed your expectations with every plate we serve.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-gray-50 py-20 px-6" aria-label="Mission and Vision">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Target size={32} className="text-blue-900" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-loose">
                  To deliver unparalleled catering experiences by combining innovative culinary techniques, the finest ingredients, and world-class service. We strive to be a seamless extension of our clients' vision, ensuring every event is executed with precision, passion, and a personal touch.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Trophy size={32} className="text-blue-900" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-loose">
                  To be the definitive name in luxury catering in the UAE and beyond, continuously pushing the boundaries of culinary creativity and setting new standards for event hospitality. We aim to create a legacy of unforgettable moments, celebrated around the world.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/blog.webp"
                alt="Elaborate food platter"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhoCAABXRUJQVlA4WAoAAAASAAAAEAAA"
                priority={false}
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-6" aria-label="Our Values">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">The Pillars of Our Promise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Star, title: 'Excellence', description: 'We pursue perfection in every detail, from menu design to final cleanup.' },
                { icon: Users, title: 'Client-Centric', description: 'Your vision is our blueprint. We listen, adapt, and deliver on your unique needs.' },
                { icon: ChefHat, title: 'Culinary Innovation', description: 'Our chefs constantly explore new flavors and techniques to surprise and delight.' },
                { icon: BadgeCheck, title: 'Unwavering Quality', description: 'We source only the freshest, premium ingredients for every dish we create.' },
                { icon: 'Teamwork', title: 'Collaborative Spirit', description: 'Our coordinated team of chefs, servers, and planners ensures a flawless event flow.' },
                { icon: 'Integrity', title: 'Trust & Transparency', description: 'We operate with honesty and clear communication from the first call to the final invoice.' },
              ].map((value, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-4 rounded-full mb-4" aria-hidden="true">
                    {typeof value.icon === 'string' ? (
                      <span className="font-bold text-blue-900">{value.icon.slice(0, 1)}</span>
                    ) : (
                      <value.icon size={32} className="text-blue-900" />
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white" aria-label="Contact Beyond Catering">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create an Unforgettable Event?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life. Contact us today for a personalized consultation and begin crafting your next memorable experience with Beyond Catering.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              aria-label="Contact Us Today"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      {/* Footer can be uncommented if needed */}
      {/* <Footer /> */}
    </>
  );
};

export default AboutPage;