import { Avatar } from '@/features/avator/ui';
import { CartTrigger } from '@/features/cart/ui';
import { Location } from '@/features/location/ui';
import { Search } from '@/features/search/ui';
import { Logo } from '@/shared/ui';
import React from 'react';

export const HeaderApp: React.FC = () => {
  return (
    <header className="flex gap-6 pt-5 pb-3 items-center justify-between">
      <Logo>React</Logo>
      <Location />
      <Search />
      <CartTrigger />
      <Avatar>AM</Avatar>
    </header>
  );
};
