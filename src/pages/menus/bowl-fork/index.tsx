import React from 'react';
import Navbar from '@/components/Navbar';

const MainCoursePage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-[Playfair Display] mb-6 text-center">Main Course</h1>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center">
          From roasted chicken to slow-braised brisket and seafood paella. Our curated mains balance flavor, nutrition, and portion for a standout dining experience.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Roasted Chicken</li>
          <li>Slow-Braised Brisket</li>
          <li>Seafood Paella</li>
          <li>Vegetarian Lasagna</li>
          <li>Grilled Salmon</li>
        </ul>
      </section>
    </>
  );
};

export default MainCoursePage;