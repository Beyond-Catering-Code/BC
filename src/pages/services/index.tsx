import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {
  SparklesIcon,
  BuildingOffice2Icon,
  CakeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Private Dining',
    description:
      'Intimate and exclusive dining experiences, tailored to your personal taste and style for an unforgettable occasion.',
    href: '/services/private-dining',
    imageUrl: '/clients/private.jpg',
    icon: UsersIcon,
  },
  {
    title: 'Weddings',
    description:
      'From grand receptions to intimate gatherings, we create magical wedding celebrations with exquisite menus and flawless service.',
    href: '/services/weddings',
    imageUrl: '/clients/weddings.jpg',
    icon: CakeIcon,
  },
  {
    title: 'Corporate Events',
    description:
      'Impress your clients and colleagues with our professional corporate catering services, perfect for meetings, conferences, and company parties.',
    href: '/services/corporate',
    imageUrl: '/clients/corporate.jpg',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'VIP & Royal Events',
    description:
      'Experience the pinnacle of luxury with our bespoke catering for VIP and royal events, where every detail is crafted to perfection.',
    href: '/services/vip-events',
    imageUrl: '/clients/vip.jpg',
    icon: SparklesIcon,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Beyond Catering</title>
        <meta
          name="description"
          content="Explore the bespoke catering services offered by Beyond Catering for any occasion."
        />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Head>

      <Navbar />

      <main className="bg-white">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              At Beyond Catering, we offer bespoke services to make your event unforgettable.
              From unique private dining experiences tailored to your taste, through magical weddings with exquisite menus, 
              professional corporate events, to pinnacle VIP and royal celebrations, our dedicated team delivers seamless, 
              flawless service and culinary excellence for every memorable occasion.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-6xl lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="relative h-[32rem] rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white items-center text-center">
                    <service.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                    <p className="mt-2 max-w-sm">{service.description}</p>
                    <Link
                      href={service.href}
                      className="mt-6 inline-block bg-blue-900 text-white hover:bg-blue-800 px-6 py-3 rounded-md text-base font-semibold transition duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 