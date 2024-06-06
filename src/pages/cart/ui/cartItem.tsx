import {
  removeCartItem,
  switchCartItemCount,
} from '@/entities/cart/model/slice';
import { IUnionProduct } from '@/entities/products/model';
import React from 'react';
import { useDispatch } from 'react-redux';
interface IProps extends IUnionProduct {
  count: number;
}
export const CartItem: React.FC<IProps> = ({ images, info, count }) => {
  const { category_id, description, name, price, stock, id } = info;
  const dispatch = useDispatch();
  const toggleCount = (count: number) =>
    dispatch(switchCartItemCount({ id, count }));
  const increase = () => toggleCount(count + 1);
  const decrease = () => toggleCount(count - 1);
  const removeItem = () => dispatch(removeCartItem(id));
  return (
    <div className="my-9 mx-14 border-b border-blue-500 py-5">
      <div className="flex gap-5 items-start justify-between">
        <div className="flex gap-5 justify-between items-start w-4/5">
          <img src={images[0]} alt="product image" className="w-14 h-14" />
          <div className="w-64">{name}</div>
          <div className="border border-blue-300 rounded-full flex">
            <button
              onClick={decrease}
              className="px-5 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors rounded-s-full"
            >
              -
            </button>
            <span className="inline-block px-4  py-2">{count}</span>
            <button
              onClick={increase}
              className="px-5 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors rounded-e-full"
            >
              +
            </button>
          </div>
          <div className="font-bold">от {price} P</div>
        </div>
        <button
          onClick={removeItem}
          className="transition-opacity hover:opacity-50"
        >
          <img src="/images/delete.svg" alt="icon delete" />
        </button>
      </div>
    </div>
  );
};
