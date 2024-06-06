import { paths } from '@/shared/paths';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Link
      to={paths.catalog}
      className={`inline-block text-4xl font-bold pb-1 ${className}`}
    >
      {children}
    </Link>
  );
};
