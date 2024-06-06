import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-[351px] sticky top-0 h-svh flex flex-col gap-5 py-7 pl-4 ">
      <img src="/images/banners/banner3.png" />
      <img src="/images/banners/banner.png" />
      <img src="/images/banners/banner2.png" />
    </aside>
  );
};
