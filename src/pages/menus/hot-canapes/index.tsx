import Navbar from '@/components/Navbar';

const HotCanapesPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-[Playfair Display] mb-6 text-center">Hot Canapés</h1>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center">
          Fresh from the kitchen and designed to delight. Our hot canapés bring bold flavors and heartwarming presentation to any event.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Mini Beef Wellingtons</li>
          <li>Truffle Mac & Cheese Bites</li>
          <li>Spicy Chicken Skewers</li>
          <li>Vegetarian Spring Rolls</li>
          <li>Mini Crab Cakes</li>
        </ul>
      </section>
    </>
  );
};

export default HotCanapesPage;
