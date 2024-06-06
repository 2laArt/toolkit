import { paths } from '@/shared/paths';
import React from 'react';
import { Link } from 'react-router-dom';

export const CartTrigger: React.FC = () => {
  return (
    <Link
      to={paths.cart}
      className="p-4 border border-gray-300 rounded-full relative"
    >
      <img src="/images/basket.svg" className="w-6" />
      <div className="absolute -top-[1px] -right-3 text-blue-600 bg-white font-semibold">
        10+
      </div>
    </Link>
  );
};
