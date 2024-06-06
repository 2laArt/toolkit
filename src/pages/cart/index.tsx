import { Button } from '@/shared/ui';
import React from 'react';
import { CartItem } from './ui/cartItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCart,
  selectCartAmount,
  selectCartName,
} from '@/entities/cart/model/selector';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/shared/paths';
import { clearCart } from '@/entities/cart/model/slice';

const getCart = () => {
  JSON.parse(localStorage.getItem('cart') ?? '');
};

export const Cart: React.FC = () => {
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectCartAmount);
  const cartName = useSelector(selectCartName);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const pushToOrder = () => navigate(paths.order);
  const clear = () => dispatch(clearCart());
  return (
    <div className="my-8">
      <div className="flex gap-4 items-center">
        <h2 className="font-bold text-lg">Корзина</h2>
        <Button
          onClick={clear}
          variant="outline"
          className="text-sm border-none text-pink-500"
          disabled={!cart.length}
        >
          Очистить корзину
        </Button>
      </div>
      <div className="border border-blue-500 rounded-3xl">
        <div className="flex justify-between items-center border-b border-blue-500 rounded-3xl">
          <div className="flex justify-between w-3/4">
            <h4 className="ml-3 truncate max-w-40">{cartName}</h4>
            <div>
              <div>Стоимость корзины:</div>
              <div className="font-bold">{totalAmount} P</div>
            </div>

            <Button
              onClick={pushToOrder}
              variant="blue"
              className="h-12 rounded-full"
              disabled={!cart.length}
            >
              Оформить
            </Button>
          </div>
          <div className="flex items-center">
            <img src="/images/banners/packet.png" alt="packet" />
            <img
              className="w-16 h-14"
              src="/images/banners/bag.png"
              alt="bag"
            />
          </div>
        </div>
        {cart.length ? (
          cart.map(el => (
            <CartItem
              images={el.images}
              info={el.info}
              key={el.id}
              count={el.count}
            />
          ))
        ) : (
          <div className="mx-auto text-center my-6">Корзина пуста</div>
        )}
      </div>
    </div>
  );
};
