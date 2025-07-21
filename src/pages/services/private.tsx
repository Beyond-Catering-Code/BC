import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  ArrowLeft,
  CheckCircle,
  Clapperboard,
  CakeSlice,
  Users,
  UtensilsCrossed,
  Music,
  Camera,
  MapPin,
  ClipboardList,
  ChefHat,
  Sparkles,
  Phone,
  Calendar,
  PartyPopper,
} from 'lucide-react';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Private Events Catering - Beyond Catering",
  "description": "Exquisite catering services for private events in Dubai — from intimate dinners to milestone celebrations, including menu curation, event planning, and execution.",
  "provider": {
    "@type": "Organization",
    "name": "Beyond Catering",
    "url": "https://beyondcatering.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beyondcatering.ae/favicon.ico"
    }
  },
  "areaServed": "Dubai, UAE",
  "serviceType": "Private Events Catering, Event Planning, Menu Curation",
  "url": "https://beyondcatering.ae/services/private"
};

const eventFeatures = [
  {
    icon: PartyPopper,
    title: 'Intimate Dinners',
    description: 'Elegant culinary experiences for small gatherings and special occasions.',
  },
  {
    icon: Users,
    title: 'Milestone Events',
    description: 'Memorable celebrations for birthdays, anniversaries and life achievements.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Curated Menus',
    description: 'Custom culinary experiences tailored to your tastes and preferences.',
  },
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Skilled culinary team crafting exceptional dishes for your event.',
  },
  {
    icon: Calendar,
    title: 'Seamless Planning',
    description: 'Comprehensive event coordination from concept to execution.',
  },
  {
    icon: MapPin,
    title: 'Stylish Settings',
    description: 'Beautiful presentation and atmosphere for your special gathering.',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation & Vision', description: 'We start with a personal consultation to understand your event, preferences, and expectations — from guest count to atmosphere.' },
  { step: 2, title: 'Menu Curation', description: "Our chefs design a bespoke menu tailored to your event — whether it’s a cocktail soirée, a birthday brunch, or an elegant dinner." },
  { step: 3, title: 'Tasting & Finalization', description: "You’ll have the opportunity to sample the menu, make adjustments, and approve the final experience." },
  { step: 4, title: 'Event Coordination', description: 'From setup to service, our team handles every detail — staffing, styling, food presentation, and flow.' },
  { step: 5, title: 'Flawless Execution', description: 'On the day, we deliver more than just food. We deliver a polished experience your guests will remember.' },
];

const PrivateEventsPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Private Events Catering Dubai | Beyond Catering</title>
        <meta
          name="description"
          content="Exquisite catering services for your private events in Dubai. From intimate dinners to milestone celebrations, Beyond Catering crafts unforgettable experiences."
        />
        <meta
          name="keywords"
          content="Private Events Catering Dubai, private chef, bespoke menu, birthday catering, event planner, catering Dubai, celebration catering, Beyond Catering"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/services/private" />
        <link rel="preload" as="image" href="/images/private2.webp" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Private Events Catering Dubai | Beyond Catering" />
        <meta property="og:description" content="Private catering for milestone celebrations, intimate dinners, and special events in Dubai." />
        <meta property="og:url" content="https://beyondcatering.ae/services/private" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/private2.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Private Events Catering Dubai | Beyond Catering" />
        <meta name="twitter:description" content="Dubai's leading private event catering — curated menus, expert chefs, seamless execution." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/private2.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main className="pt-20" id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-white" aria-label="Private Events Catering Hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-800 hover:underline mb-4" aria-label="Back to Home">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                  Private Events Catering
                </h1>
                <p className="text-lg text-gray-600">
                  Whether it's an intimate dinner, a milestone birthday, or a stylish garden gathering, we bring refined hospitality to your most special moments. Beyond Catering designs every private event with care — from elegant canapés and live stations to beautifully curated buffets. Our team works closely with you to craft a menu and setting that reflect your vision, so you can focus on hosting while we take care of every detail. Because your celebrations deserve to be effortless, memorable, and undeniably delicious.
                </p>
                <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-semibold transition duration-200" aria-label="Plan Your Event">
                  Plan Your Event
                </button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/private2.jpg"
                  alt="Private Event Setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </section>

        {/* Private Event Services Section */}
        <section className="py-20 bg-gray-50" aria-label="Private Event Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Private Event Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Elevate your special occasions with our comprehensive event catering services.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              {/* Full-Service Events */}
              <div className="bg-gray-800 text-white p-8 rounded-lg" role="region" aria-label="Full-Service Events">
                <div className="flex flex-col items-center text-center">
                  <CakeSlice size={40} className="mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold">Full-Service Events</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">
                  Complete event catering with staff, setup, and service.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Professional serving staff for seamless service</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Elegant presentation with high-quality tableware</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Custom menu design with tasting sessions</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Complete setup, service, and cleanup</span></li>
                </ul>
              </div>
              {/* Event Enhancements */}
              <div className="bg-gray-800 text-white p-8 rounded-lg" role="region" aria-label="Event Enhancements">
                <div className="flex flex-col items-center text-center">
                  <Clapperboard size={40} className="mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold">Event Enhancements</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">
                  Additional services to elevate your special occasion.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3"><UtensilsCrossed className="text-blue-400" aria-hidden="true" /> <div><h4 className="font-semibold">Menu Design</h4><p className="text-sm text-gray-400">Personalized menus for your special occasion.</p></div></div>
                  <div className="flex items-center gap-3"><Music className="text-blue-400" aria-hidden="true" /> <div><h4 className="font-semibold">Entertainment</h4><p className="text-sm text-gray-400">Recommendations for music and performers.</p></div></div>
                  <div className="flex items-center gap-3"><Camera className="text-blue-400" aria-hidden="true" /> <div><h4 className="font-semibold">Photography</h4><p className="text-sm text-gray-400">Professional photo and video services.</p></div></div>
                  <div className="flex items-center gap-3"><MapPin className="text-blue-400" aria-hidden="true" /> <div><h4 className="font-semibold">Venue Selection</h4><p className="text-sm text-gray-400">Help finding the perfect location.</p></div></div>
                  <div className="flex items-center gap-3"><ClipboardList className="text-blue-400" aria-hidden="true" /> <div><h4 className="font-semibold">Guest Management</h4><p className="text-sm text-gray-400">RSVP tracking and seating arrangements.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Catering Features Section */}
        <section className="py-20 bg-white" aria-label="Event Catering Features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Event Catering Features</h2>
            <p className="mt-4 text-gray-600">Comprehensive event planning and catering services for your special occasions.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left" role="region" aria-label={feature.title}>
                  <div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4">
                    <feature.icon size={32} aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50" aria-label="How Private Event Catering Works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600">
              We make hosting effortless with a seamless, step-by-step approach.
            </p>
            <div className="mt-16 grid md:grid-cols-5 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    {item.step}
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 w-full shadow-sm">
                    <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white" aria-label="Event Planning CTA">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold">Ready to Plan Your Perfect Event?</h2>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition" aria-label="Call Us">
                <Phone size={18} /> Call Us
              </button>
              <button className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-md font-semibold transition" aria-label="Request a Quote">
                Request a Quote
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivateEventsPage;