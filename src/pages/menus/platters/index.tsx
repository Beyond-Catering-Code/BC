import Navbar from '@/components/Navbar';

const PlattersPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-[Playfair Display] mb-6 text-center">Platters</h1>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center">
          Perfect for sharing. Artisanal cheese boards, mezze spreads, burger baskets, and more. Receive your guests with an impressive selection.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Artisanal Cheese Board</li>
          <li>Mezze Spread</li>
          <li>Burger Basket</li>
          <li>Fruit Platter</li>
          <li>Charcuterie Board</li>
        </ul>
      </section>
    </>
  );
};

export default PlattersPage;
