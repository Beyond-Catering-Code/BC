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

const services = [
  {
    title: 'Corporate Catering',
    description: 'Impress your clients and colleagues with our professional corporate catering services.',
    image: '/images/corporate.JPG',
    href: '/services/corporate',
    icon: ChefHat,
  },
  {
    title: 'Private Events Catering',
    description: 'Make your special occasions unforgettable with our bespoke catering services.',
    image: '/images/private.jpg',
    href: '/services/private',
    icon: Cake,
  },
  {
    title: 'Drop off Catering',
    description: 'Convenient and delicious catering solutions delivered right to your location.',
    image: '/images/dropoff.JPG',
    href: '/services/drop-off',
    icon: Box,
  },
];

const otherServices = [
  { name: 'Canapés', description: 'Elegant bite-sized delicacies perfect for sophisticated events.', href: '/services/canapes', icon: ChefHat },
  { name: 'Bowl & Fork', description: 'Casual dining options ideal for social gatherings.', href: '/services/bowl-fork', icon: UtensilsCrossed },
  { name: 'Fine Dining', description: 'Premium dining experience with exceptional service.', href: '/services/fine-dining', icon: Wine },
  { name: 'Live Station', description: 'Interactive cooking stations for an engaging dining experience.', href: '/services/live-station', icon: CookingPot },
  { name: 'Barbecue', description: 'Grilled specialties for outdoor events and celebrations.', href: '/services/barbecue', icon: Flame },
  { name: 'High Tea', description: 'Traditional afternoon tea service with delicate pastries.', href: '/services/high-tea', icon: Coffee },
];

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>Our Services - Beyond Catering</title>
        <meta name="description" content="Explore the wide range of catering services offered by Beyond Catering, from corporate events to private parties." />
      </Head>

      <Navbar />

      <main className="bg-gray-50 pt-16">
        {/* Hero Section */}
        <div className="text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We offer a wide range of catering services tailored to meet your specific needs and preferences.
          </p>
        </div>

        {/* Services Section */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="relative h-[32rem] rounded-2xl overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white items-center text-center">
                  <service.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  <p className="mt-2 max-w-sm">{service.description}</p>
                  <Link href={service.href} className="mt-6 inline-block bg-blue-900 text-white hover:bg-blue-800 px-6 py-3 rounded-md text-base font-semibold transition duration-200">
                      Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Section */}
        <div className="bg-gray-100">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                {otherServices.map((service) => (
                  <Link href={service.href} key={service.name} className="group flex flex-col items-center">
                      <service.icon className="w-10 h-10 text-gray-600 group-hover:text-blue-800 transition-colors" />
                      <h4 className="mt-4 font-semibold text-gray-800">{service.name}</h4>
                      <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage; 