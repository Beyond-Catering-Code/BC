import Navbar from '@/components/Navbar';

const SweetCanapesPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-[Playfair Display] mb-6 text-center">Sweet Canapés</h1>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center">
          End your event on a sweet note. These handcrafted bites are the perfect finale to your celebration. Indulgent, elegant, unforgettable.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Chocolate Mousse Cups</li>
          <li>Lemon Tartlets</li>
          <li>Mini Cheesecakes</li>
          <li>Fruit Pavlovas</li>
          <li>Salted Caramel Profiteroles</li>
        </ul>
      </section>
    </>
  );
};

export default SweetCanapesPage;
