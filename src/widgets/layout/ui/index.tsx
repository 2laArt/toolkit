import React from 'react';
import { HeaderApp } from './header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { FooterApp } from './footer';

export const LayoutApp: React.FC = () => {
  return (
    <main>
      <div className="max-w-[1400px] mx-auto flex px-5 gap-6 justify-between relative mb-14">
        <div>
          <HeaderApp />
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <div className="bg-[#F8F8F8]">
        <FooterApp />
      </div>
    </main>
  );
};
