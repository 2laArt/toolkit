import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'outline' | 'gray';
}
export const Button: React.FC<IProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const variants = {
    blue: 'bg-blue-600 text-white',
    outline: 'border border-blue-600 text-blue-600 rounded-full',
    gray: 'bg-[#F0F4FB] text-[#82828f]',
  };
  const btnVariant = variant ? variants[variant] : '';
  return (
    <button
      className={`py-[10px] px-10 hover:scale-105 disabled:pointer-events-none transition-transform ${btnVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
