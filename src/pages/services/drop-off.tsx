import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  ArrowLeft,
  CheckCircle,
  ChefHat,
  UtensilsCrossed,
  Box,
  Clock,
  Users,
  Phone,
  Mail,
  Wrench,
  Tags,
  Package,
} from 'lucide-react';

const processSteps = [
  { step: 1, title: 'Choose Your Menu', description: "Browse our extensive menu options and select dishes that suit your event and guests' preferences." },
  { step: 2, title: 'Place Your Order', description: 'Contact us with your selections, event details, guest count, and any dietary requirements.' },
  { step: 3, title: 'Confirm Details', description: "We'll discuss delivery time, setup preferences, and any special instructions for your event." },
  { step: 4, title: 'Enjoy Your Event', description: 'We deliver and optionally set up, leaving you free to focus on hosting your guests.' },
];

const DropOffCateringPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Drop Off Catering - Beyond Catering</title>
        <meta name="description" content="Delicious, chef-prepared meals delivered directly to your location." />
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Drop Off Catering</h1>
                <p className="text-lg text-gray-600">
                  We cook and deliver delicious, freshly prepared meals directly to your location. Our drop-off service includes the option to professionally arrange your buffet area, allowing you to focus on your guests. Simply choose from our extensive menu options, and we’ll take care of the rest - bringing restaurant-quality cuisine to your event with minimal fuss and maximum flavor.
                </p>
                <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-semibold transition duration-200">
                  View Menu Options
                </button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/image1.JPG" alt="Drop Off Catering" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Drop Off Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Drop Off Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">Fresh food cooked and delivered to your location with optional buffet setup.</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              {/* Cook & Drop Off */}
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <ChefHat size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Cook & Drop Off</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Our chefs prepare your food fresh, and we deliver it ready to serve.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span>Fresh preparation right before delivery</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span>Temperature-controlled transport</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span>Detailed heating/serving instructions included</span></li>
                  <li className="flex items-start"><CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" /><span>Disposable or returnable serving platters available</span></li>
                </ul>
              </div>
              {/* Buffet Arrangement */}
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <UtensilsCrossed size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Buffet Arrangement</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">We'll set up an attractive buffet display for your guests.</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3"><Wrench className="text-blue-400" /> <div><h4 className="font-semibold">Professional Setup</h4><p className="text-sm text-gray-400">Elegant arrangement of all food items.</p></div></div>
                    <div className="flex items-center gap-3"><Clock className="text-blue-400" /> <div><h4 className="font-semibold">Timely Service</h4><p className="text-sm text-gray-400">Setup completed before your guests arrive.</p></div></div>
                    <div className="flex items-center gap-3"><Users className="text-blue-400" /> <div><h4 className="font-semibold">Equipment</h4><p className="text-sm text-gray-400">Chafing dishes and serving utensils provided.</p></div></div>
                    <div className="flex items-center gap-3"><Tags className="text-blue-400" /> <div><h4 className="font-semibold">Food Labeling</h4><p className="text-sm text-gray-400">Clear labels for all dishes and allergens.</p></div></div>
                    <div className="flex items-center gap-3"><Package className="text-blue-400" /> <div><h4 className="font-semibold">Collection</h4><p className="text-sm text-gray-400">Optional equipment pickup after your event.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Drop Off Catering Features</h2>
            <p className="mt-4 text-gray-600">Chef-prepared meals delivered to your doorstep, ready to serve.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left"><div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4"><ChefHat size={32}/></div><h4 className="font-bold text-lg text-gray-800">Chef-Prepared Meals</h4><p className="text-gray-600 mt-2">Freshly cooked by our professional chefs just before delivery.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left"><div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4"><Box size={32}/></div><h4 className="font-bold text-lg text-gray-800">Convenient Delivery</h4><p className="text-gray-600 mt-2">We deliver to your location at your preferred time.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left"><div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4"><UtensilsCrossed size={32}/></div><h4 className="font-bold text-lg text-gray-800">Buffet Setup</h4><p className="text-gray-600 mt-2">Optional professional arrangement of your buffet area.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left"><div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4"><Tags size={32}/></div><h4 className="font-bold text-lg text-gray-800">Customizable Menus</h4><p className="text-gray-600 mt-2">Choose from our extensive menu options for any occasion.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left"><div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4"><Clock size={32}/></div><h4 className="font-bold text-lg text-gray-800">Flexible Timing</h4><p className="text-gray-600 mt-2">Schedule delivery that fits perfectly with your event timeline.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left"><div className="inline-block bg-blue-50 text-blue-800 rounded-full p-3 mb-4"><Users size={32}/></div><h4 className="font-bold text-lg text-gray-800">Any Group Size</h4><p className="text-gray-600 mt-2">Catering for intimate gatherings to large corporate events.</p></div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600">Four simple steps to delicious catered food at your location.</p>
            <div className="mt-16 grid md:grid-cols-4 gap-8">
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

        {/* Menu Options Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Menu Options</h2>
            <p className="mt-4 text-gray-600">Choose from our extensive menu categories to create your perfect catering experience.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">Breakfast & Brunch</h4>
                <ul className="space-y-2"><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Continental breakfast</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Full hot breakfast buffet</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Breakfast pastries</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Coffee & tea service</li></ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">Lunch Options</h4>
                <ul className="space-y-2"><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Sandwich platters</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Boxed lunches</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Salad bars</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Hot lunch buffets</li></ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">Dinner Selections</h4>
                <ul className="space-y-2"><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Appetizer stations</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Multiple course options</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Carving stations</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Chef’s specialties</li></ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">International Cuisines</h4>
                <ul className="space-y-2"><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Mediterranean</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Asian fusion</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Latin American</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Middle Eastern</li></ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">Dietary Specialties</h4>
                <ul className="space-y-2"><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Vegetarian</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Vegan</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Gluten-free</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Allergen-conscious options</li></ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">Desserts & Beverages</h4>
                <ul className="space-y-2"><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Dessert platters</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Custom cakes</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Non-alcoholic beverages</li><li className="flex items-center gap-2 text-gray-600"><CheckCircle size={16} className="text-blue-800" />Specialty coffees</li></ul>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-3 rounded-md font-semibold transition">Request Full Menu</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold">Ready to Order Drop Off Catering?</h2>
            <p className="mt-4 max-w-2xl mx-auto">Contact us today to discuss your menu options and delivery details.</p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition">
                <Phone size={18} /> Call Us
              </button>
              <button className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-md font-semibold transition">
                <Mail size={18} /> Email Order
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default DropOffCateringPage; 