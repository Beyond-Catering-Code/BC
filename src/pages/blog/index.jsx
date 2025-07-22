// Enhanced BlogPage with optimization structure for future content
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Beyond Catering</title>
        <meta name="description" content="Explore culinary insights, event stories, and catering tips from Dubai's premier catering experts at Beyond Catering." />
        <meta name="keywords" content="Dubai catering blog, culinary insights, event catering tips, food stories Dubai, Beyond Catering blog" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/blog" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        
        {/* Preload optimized images for future blog content */}
        <link rel="preload" as="image" href="/images/blog.webp" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Beyond Catering" />
        <meta property="og:description" content="Explore culinary insights and event stories from Dubai's premier catering experts." />
        <meta property="og:url" content="https://beyondcatering.ae/blog" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/blog.webp" />
      </Head>

      <Navbar />
      
      <main className="pt-32 bg-[#F0F6FB] text-gray-900 font-sans min-h-screen">
        {/* Hero Section for Blog */}
        <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog.webp"
              alt="Culinary stories and insights from Beyond Catering"
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
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Culinary Stories</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Coming Soon - Insights from Dubai's Premier Catering Experience</p>
          </div>
        </section>

        {/* Content placeholder optimized for future blog posts */}
        <section className="py-20 px-6" aria-label="Blog Content">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">More Stories Coming Soon</h2>
            <p className="text-gray-600 text-lg">
              We're preparing exclusive content about our culinary adventures, 
              event highlights, and insights from Dubai's most memorable occasions.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}