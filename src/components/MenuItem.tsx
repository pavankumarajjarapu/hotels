import React from 'react';

interface MenuItemProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

export function MenuItem({ image, name, price, description }: MenuItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-emerald-900">{name}</h4>
        <p className="text-gray-600 mb-3 text-sm">{description}</p>
        <p className="text-emerald-600 font-bold">{price}</p>
      </div>
    </div>
  );
}