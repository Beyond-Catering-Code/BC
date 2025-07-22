import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  ChefHat,
  UtensilsCrossed,
  Wine,
  CookingPot,
  Flame,
  Coffee,
  Cake,
  Box
} from 'lucide-react';

// JSON-LD Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Catering Services - Beyond Catering",
  "description": "Explore premium catering services in Dubai: corporate catering, private event catering, drop-off catering, live stations, BBQ, and more.",
  "url": "https://beyondcatering.ae/services",
  "provider": {
    "@type": "Organization",
    "name": "Beyond Catering",
    "url": "https://beyondcatering.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beyondcatering.ae/favicon.ico"
    }
  }
};

const services = [
  {
    title: 'Corporate Catering',
    description: 'Impress your clients and colleagues with our professional corporate catering services.',
    image: '/images/corporate.jpg',
    href: '/services/corporate',
    icon: ChefHat,
  },
  {
    title: 'Private Events Catering',
    description: 'Make your special occasions unforgettable with our bespoke catering services.',
    image: '/images/private.webp',
    href: '/services/private',
    icon: Cake,
  },
  {
    title: 'Drop off Catering',
    description: 'Convenient and delicious catering solutions delivered right to your location.',
    image: '/images/dropoff.jpg',
    href: '/services/drop-off',
    icon: Box,
  },
];

const otherServices = [
  { name: 'Canapés', description: 'Elegant bite-sized delicacies perfect for sophisticated events.', icon: ChefHat },
  { name: 'Bowl & Fork', description: 'Casual dining options ideal for social gatherings.', icon: UtensilsCrossed },
  { name: 'Fine Dining', description: 'Premium dining experience with exceptional service.', icon: Wine },
  { name: 'Live Station', description: 'Interactive cooking stations for an engaging dining experience.', icon: CookingPot },
  { name: 'Barbecue', description: 'Grilled specialties for outdoor events and celebrations.', icon: Flame },
  { name: 'High Tea', description: 'Traditional afternoon tea service with delicate pastries.', icon: Coffee },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Catering Services in Dubai | Beyond Catering</title>
        <meta
          name="description"
          content="Explore the wide range of catering services offered by Beyond Catering in Dubai, from corporate events to private parties, live stations, BBQ, and more."
        />
        <meta
          name="keywords"
          content="Dubai catering, catering services Dubai, corporate catering, private event catering, live station, BBQ catering, high tea Dubai, drop off catering, Beyond Catering"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Catering Services in Dubai | Beyond Catering" />
        <meta property="og:description" content="Corporate, private, drop-off, and special event catering. Discover premium culinary services in Dubai with Beyond Catering." />
        <meta property="og:url" content="https://beyondcatering.ae/services" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/corporate.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catering Services in Dubai | Beyond Catering" />
        <meta name="twitter:description" content="Explore Dubai's top catering services for events, offices, and private functions." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/corporate.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main className="bg-gray-50 pt-16" id="main-content" role="main">
        {/* Hero Section */}
        <section className="text-center py-16 px-4" aria-label="Catering Services Hero">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We offer a wide range of catering services tailored to meet your specific needs and preferences.
          </p>
        </section>

        {/* Services Section */}
        <section aria-label="Featured Catering Services">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="relative h-[32rem] rounded-2xl overflow-hidden group" role="region" aria-label={service.title}>
                  <Image
                    src={service.image.replace('.jpg', '.webp')}
                    alt={service.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    priority={service.title === 'Corporate Catering'}
                  />
                  <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
                  <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white items-center text-center">
                    <service.icon className="w-12 h-12 mb-4" aria-hidden="true" />
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                    <p className="mt-2 max-w-sm">{service.description}</p>
                    <Link
                      href={service.href}
                      className="mt-6 inline-block bg-blue-900 text-white hover:bg-blue-800 px-6 py-3 rounded-md text-base font-semibold transition duration-200"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="bg-gray-100" aria-label="All Other Catering Services">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                {otherServices.map((service) => (
                  <div key={service.name} className="flex flex-col items-center" role="region" aria-label={service.name}>
                    <service.icon className="w-10 h-10 text-gray-600" aria-hidden="true" />
                    <h4 className="mt-4 font-semibold text-gray-800">{service.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;