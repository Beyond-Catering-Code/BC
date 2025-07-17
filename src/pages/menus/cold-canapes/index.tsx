'use client';

import React from 'react';

const ColdCanapesPage = () => {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Cold Canapés</h1>

      <p className="text-lg text-gray-700 mb-10">
        Our cold canapés are a great option for the beginning of your event. Each bite is crafted with care using premium ingredients.
      </p>

      {/* List of Cold Canapés */}
      <ul className="space-y-4 text-gray-800 list-disc list-inside">
        <li>Goat cheesecake, red onion jam, rosemary shortbread (v)</li>
        <li>Balsamic tomato, cashew pesto tartlet (v)</li>
        <li>Heirloom tomato, burrata, basil tartine (v)</li>
        <li>Smoked salmon, cucumber, dill cream cheese on rye</li>
        <li>Mini caprese skewers with balsamic reduction (v)</li>
        {/* Add more items here as needed */}
      </ul>
    </section>
  );
};

export default ColdCanapesPage;