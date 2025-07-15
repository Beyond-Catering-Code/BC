import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  ArrowLeft,
  Utensils,
  Building,
  CheckCircle,
  Soup,
  Users,
  Smile,
  Calendar,
  Truck,
  Phone,
  Mail,
  ListOrdered,
  DollarSign,
  QrCode,
  Megaphone,
  ChefHat,
  HeartHandshake,
  UtensilsCrossed
} from 'lucide-react';

const cateringServices = [
  {
    icon: Building,
    title: 'Customized Solutions',
    description: 'Tailored food programs for your company culture.',
  },
  {
    icon: HeartHandshake,
    title: 'Employee Satisfaction',
    description: 'Boost morale with high-quality, diverse meal options.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Menu Diversity',
    description: 'Rotating international cuisines for fresh experiences.',
  },
  {
    icon: ChefHat,
    title: 'Professional Chefs',
    description: 'Experienced team adapting to dietary requirements.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Daily, weekly, or event-based catering options.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Punctual service ensuring fresh, perfect temperature.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We discuss your needs, preferences, and budget.',
  },
  {
    step: 2,
    title: 'Menu Design',
    description: 'Our chefs create custom menus for your company.',
  },
  {
    step: 3,
    title: 'Execution',
    description: 'We handle everything from preparation to delivery.',
  },
];


const CorporateCateringPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Corporate Catering Solutions - Beyond Catering</title>
        <meta name="description" content="Comprehensive corporate catering services, from daily meal delivery to full canteen setup." />
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Corporate Catering Solutions</h1>
                <p className="text-lg text-gray-600">
                  We partner with companies to design and execute tailored food programs that enhance workplace dining. From concept to rollout, we manage every detail - whether it's daily meal delivery or a full canteen setup, we ensure a seamless, branded experience from the first bite to the final bill.
                </p>
                <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-semibold transition duration-200">
                  Get a Custom Quote
                </button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image src="/clients/corporate.jpg" alt="Corporate Catering Setup" layout="fill" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Catering Options Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Corporate Catering Options</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">Two comprehensive approaches to corporate food service, tailored to your needs.</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              {/* Buffet Setup */}
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <Utensils size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Buffet Setup</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Professional buffet catering for corporate events and meetings.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Customizable menu options for all meals</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Elegant presentation with professional staff</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Accommodates groups of all sizes</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span className="text-gray-300">Includes setup, service, and cleanup</span></li>
                </ul>
              </div>
              {/* Cafeteria Management */}
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <Building size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Cafeteria Management</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Full-service operation of your corporate cafeteria with daily fresh options.</p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3"><ListOrdered className="text-blue-400" /> <div><h4 className="font-semibold">Menu Curation</h4><p className="text-sm text-gray-400">Tailored menus for your team's preferences.</p></div></div>
                    <div className="flex items-center gap-3"><DollarSign className="text-blue-400" /> <div><h4 className="font-semibold">Pricing Strategy</h4><p className="text-sm text-gray-400">Smart pricing aligned with company budgets.</p></div></div>
                    <div className="flex items-center gap-3"><Truck className="text-blue-400" /> <div><h4 className="font-semibold">On-Site Logistics</h4><p className="text-sm text-gray-400">Seamless kitchen and delivery coordination.</p></div></div>
                    <div className="flex items-center gap-3"><QrCode className="text-blue-400" /> <div><h4 className="font-semibold">QR Ordering</h4><p className="text-sm text-gray-400">Fair, contactless ordering and payment.</p></div></div>
                    <div className="flex items-center gap-3"><Megaphone className="text-blue-400" /> <div><h4 className="font-semibold">Internal Marketing</h4><p className="text-sm text-gray-400">WhatsApp groups to boost engagement.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presentation Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Exquisite Catering Presentation</h2>
            <p className="mt-4 text-gray-600">We take pride in our elegant food displays and attention to detail.</p>
            <div className="mt-10 relative h-[32rem] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/image3.JPG" alt="Beautifully presented canapes" layout="fill" className="object-cover" />
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-lg text-gray-800">Beautifully Presented Corporate Canapés</h4>
              <p className="text-gray-500">Artful displays that create a lasting impression for your guests</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Catering Services</h2>
            <p className="mt-4 text-gray-600">Complete end-to-end catering solutions for your company.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cateringServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left">
                  <div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4">
                    <service.icon size={32} />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600">We make corporate catering simple with our streamlined process.</p>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
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
        <section className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold">Ready to Elevate Your Workplace Dining?</h2>
            <p className="mt-4 max-w-2xl mx-auto">Contact us today for a customized catering solution.</p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition">
                <Phone size={18} /> Call Us
              </button>
              <button className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-md font-semibold transition">
                <Mail size={18} /> Contact Us
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CorporateCateringPage; 