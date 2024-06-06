import React from 'react';

export const ProductImage: React.FC<{ images: string[] }> = ({ images }) => {
  return !!images.length ? (
    <img
      src={images[0]}
      alt="product image"
      className=" object-contain mix-blend-color-burn aspect-video"
    />
  ) : (
    <div className="absolute w-full h-full bg-slate-400" />
  );
};
