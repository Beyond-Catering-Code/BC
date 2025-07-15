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
  Mail,
  Calendar,
  Eye,
  PenSquare,
  ClipboardCheck,
  PartyPopper
} from 'lucide-react';

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

const PrivateEventsPage = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Private Events Catering - Beyond Catering</title>
        <meta name="description" content="Exquisite catering services for your private events, from intimate dinners to milestone celebrations." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-800 hover:underline mb-4">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Private Events Catering</h1>
                <p className="text-lg text-gray-600">
                  Whether it's an intimate dinner, a milestone birthday, or a stylish garden gathering, we bring refined hospitality to your most special moments. Beyond Catering designs every private event with care — from elegant canapés and live stations to beautifully curated buffets. Our team works closely with you to craft a menu and setting that reflect your vision, so you can focus on hosting while we take care of every detail. Because your celebrations deserve to be effortless, memorable, and undeniably delicious.
                </p>
                <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-semibold transition duration-200">
                  Plan Your Event
                </button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image src="/clients/private.jpg" alt="Private Event Setup" layout="fill" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Private Event Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Private Event Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">Elevate your special occasions with our comprehensive event catering services.</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              {/* Full-Service Events */}
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <CakeSlice size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Full-Service Events</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Complete event catering with staff, setup, and service.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Professional serving staff for seamless service</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Elegant presentation with high-quality tableware</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Custom menu design with tasting sessions</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Complete setup, service, and cleanup</span></li>
                </ul>
              </div>
              {/* Event Enhancements */}
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <Clapperboard size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Event Enhancements</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Additional services to elevate your special occasion.</p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3"><UtensilsCrossed className="text-blue-400" /> <div><h4 className="font-semibold">Menu Design</h4><p className="text-sm text-gray-400">Personalized menus for your special occasion.</p></div></div>
                    <div className="flex items-center gap-3"><Music className="text-blue-400" /> <div><h4 className="font-semibold">Entertainment</h4><p className="text-sm text-gray-400">Recommendations for music and performers.</p></div></div>
                    <div className="flex items-center gap-3"><Camera className="text-blue-400" /> <div><h4 className="font-semibold">Photography</h4><p className="text-sm text-gray-400">Professional photo and video services.</p></div></div>
                    <div className="flex items-center gap-3"><MapPin className="text-blue-400" /> <div><h4 className="font-semibold">Venue Selection</h4><p className="text-sm text-gray-400">Help finding the perfect location.</p></div></div>
                    <div className="flex items-center gap-3"><ClipboardList className="text-blue-400" /> <div><h4 className="font-semibold">Guest Management</h4><p className="text-sm text-gray-400">RSVP tracking and seating arrangements.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Catering Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Event Catering Features</h2>
            <p className="mt-4 text-gray-600">Comprehensive event planning and catering services for your special occasions.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left">
                  <div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4">
                    <feature.icon size={32} />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600">We make hosting effortless with a seamless, step-by-step approach.</p>
            <div className="mt-16 relative">
              <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 hidden md:block" />
              <div className="grid md:grid-cols-5 gap-8 relative">
                  <div className="flex flex-col items-center text-center z-10"><div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">1</div><div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 w-full"><h4 className="font-bold text-lg text-gray-900">Consultation & Vision</h4><p className="text-gray-600 mt-2">We start with a personal consultation to understand your event, preferences, and expectations — from guest count to atmosphere.</p></div></div>
                  <div className="flex flex-col items-center text-center z-10"><div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">2</div><div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 w-full"><h4 className="font-bold text-lg text-gray-900">Menu Curation</h4><p className="text-gray-600 mt-2">Our chefs design a bespoke menu tailored to your event — whether it's a cocktail soirée, a birthday brunch, or an elegant dinner.</p></div></div>
                  <div className="flex flex-col items-center text-center z-10"><div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">3</div><div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 w-full"><h4 className="font-bold text-lg text-gray-900">Tasting & Finalization</h4><p className="text-gray-600 mt-2">You'll have the opportunity to sample the menu, make adjustments, and approve the final experience.</p></div></div>
                  <div className="flex flex-col items-center text-center z-10"><div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">4</div><div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 w-full"><h4 className="font-bold text-lg text-gray-900">Event Coordination</h4><p className="text-gray-600 mt-2">From setup to service, our team handles every detail — staffing, styling, food presentation, and flow.</p></div></div>
                  <div className="flex flex-col items-center text-center z-10"><div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">5</div><div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 w-full"><h4 className="font-bold text-lg text-gray-900">Flawless Execution</h4><p className="text-gray-600 mt-2">On the day, we deliver more than just food. We deliver a polished experience your guests will remember.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold">Ready to Plan Your Perfect Event?</h2>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition">
                <Phone size={18} /> Call Us
              </button>
              <button className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-md font-semibold transition">
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