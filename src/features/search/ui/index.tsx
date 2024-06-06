import React from 'react';

export const Search: React.FC = () => {
  return (
    <div className="relative">
      <input
        placeholder="Поиск бренда, товара, категории..."
        className="inline-block w-[468px] rounded-full py-4 px-5 border border-[#f0f4fb] pr-28 outline-none shadow-[0px 0px 2px 4px #f0f4fb] transition-shadow"
      />
      <button className="absolute bg-[#F0F4FB] top-1/2 right-1 -translate-y-1/2 h-[calc(100%-8px)] w-24 rounded-full hover:bg-[#F0F4FB]/60 transition-colors grid place-items-center">
        <img src="/images/search.svg" />
      </button>
    </div>
  );
};
