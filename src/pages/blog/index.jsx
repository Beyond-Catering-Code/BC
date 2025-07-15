import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 bg-[#F0F6FB] text-gray-800">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 text-center pb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-5 leading-tight animate-fadeIn">
            Top Catering Choice for Dubai’s Leading Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn delay-100">
            Beyond Catering is a full-service catering company based in Dubai, proudly serving all 7 Emirates across the UAE. With over 100,000 meals delivered, we are trusted by the UAE’s top brands for high-quality, reliable catering solutions.
          </p>
          <div className="relative w-full aspect-[16/7] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-100/50 transition-all duration-500 group">
            <Image
              src="/images/blog.JPG"
              alt="Catering display"
              fill
              className="object-cover object-[center_62%] transition-transform duration-700 group-hover:scale-[1.025]"
              priority
            />
          </div>
        </section>

        {/* OUTSTANDING CATERING */}
        <section className="bg-white py-24 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="text-left md:flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                OUTSTANDING CATERING
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                Elevate your events with exceptional food and impeccable service. From corporate functions to private celebrations, we create memorable dining experiences.
              </p>
              <a
                href="/book"
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-semibold text-sm md:text-base hover:bg-blue-800 transition"
              >
                Book a Tasting
              </a>
            </div>
            <div className="md:flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/image3.JPG"
                  alt="Outstanding Catering"
                  width={800}
                  height={600}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE BEYOND CATERING */}
        <section className="bg-[#F0F6FB] py-24 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Why Choose Beyond Catering?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              At Beyond Catering, we believe that exceptional food is at the heart of any memorable event.
              Our passion for culinary excellence drives us to deliver outstanding catering experiences that
              delight your guests and exceed your expectations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Experienced Chefs',
                desc: 'Our team of professional chefs brings years of culinary expertise to create exceptional dishes.',
              },
              {
                title: 'Quality Ingredients',
                desc: 'We source only the freshest, highest quality ingredients for all our menu items.',
              },
              {
                title: 'Customized Menus',
                desc: 'We craft personalized menus that reflect your event’s theme and your guests’ preferences.',
              },
              {
                title: 'Impeccable Service',
                desc: 'Our attentive staff ensures seamless service from setup to cleanup.',
              },
              {
                title: 'On-Time Delivery',
                desc: 'We pride ourselves on punctuality, ensuring your event runs according to schedule.',
              },
              {
                title: 'Attention to Detail',
                desc: 'From presentation to flavor, we perfect every detail to exceed your expectations.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white py-24 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from some of the brands and individuals who trust Beyond Catering with their events.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Alya from Emaar',
                quote: 'Beyond Catering exceeded our expectations. The presentation, taste, and service were flawless.',
              },
              {
                name: 'David, Private Client',
                quote: 'The team delivered an unforgettable dining experience for our anniversary. Highly recommend!',
              },
              {
                name: 'Fatima – Event Planner',
                quote: 'Every dish was a masterpiece. Beyond Catering is now our go-to for all corporate functions.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F9FBFF] p-8 rounded-2xl shadow-md border border-blue-100 text-left flex flex-col items-start"
              >
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-800 italic mb-6">“{item.quote}”</p>
                <span className="text-blue-900 font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}