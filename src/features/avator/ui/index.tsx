import { paths } from '@/shared/paths';
import React from 'react';
import { Link } from 'react-router-dom';

export const Avatar: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ children, className }) => {
  return (
    <Link
      to={paths.ordersHistory}
      className={`w-14 h-14 bg-gray-200 rounded-full grid place-items-center ${className}`}
    >
      {children}
    </Link>
  );
};
