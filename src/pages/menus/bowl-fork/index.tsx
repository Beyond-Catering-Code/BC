
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const BowlForkPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-[Playfair Display] mb-6 text-center">Bowl & Fork</h1>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center">
          A great way to receive your guests after the canapé service. Nice portions inside our delight bowls, from truffle pasta to miso black cod.
        </p>
        <div className="w-full max-w-2xl flex flex-col items-center">
          <Image
            src="/menus/bowl-fork.jpg"
            alt="Bowl & Fork Menu"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-8"
          />
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Truffle Pasta Delight Bowl</li>
            <li>Miso Black Cod Bowl</li>
            <li>Asian Chicken Rice Bowl</li>
            <li>Vegan Buddha Bowl</li>
            <li>Moroccan Lamb & Couscous Bowl</li>
            <li>Thai Green Curry Bowl</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default BowlForkPage;
