import React from 'react';
import { IOrder } from '../order';

export const OrderHistory: React.FC = () => {
  const history: IOrder[] = JSON.parse(localStorage.getItem('history') ?? '[]');
  return (
    <div>
      <h1 className="my-8 text-xl font-bold">История заказов</h1>
      <div className="grid grid-cols-2 gap-5 ">
        {history && history.map(el => <OrderItem order={el} key={el.id} />)}
      </div>
    </div>
  );
};
const OrderItem: React.FC<{ order: IOrder }> = ({ order }) => {
  const {
    address,
    date: d,
    id,
    image,
    length,
    name,
    status,
    totalAmount,
  } = order;
  const [date, time] = d.split('/');
  return (
    <div className="border border-[#AEC2EA] rounded-3xl p-5">
      <div className="flex gap-3 mb-3">
        <img
          src={image}
          alt={name}
          className="w-12 aspect-square rounded-full"
        />
        <div className="font-semibold">
          <div className="text-xl">{name}</div>
          <div className="text-[#727280]">{date}</div>
        </div>
      </div>
      <div className="flex gap-5">
        <OrderBlock title={'Статус заказа'} text={status} />
        <OrderBlock
          title={'Номер заказа'}
          text={`#${id}`}
          className="text-blue-500"
        />
      </div>
      <div className="flex gap-5 mt-3">
        <OrderBlock title={'Кол-во товаров'} text={length.toString()} />
        <OrderBlock title={'Стоимость заказа'} text={totalAmount.toString()} />
        <OrderBlock title={'Адрес доставки'} text={address} />
      </div>
    </div>
  );
};
const OrderBlock: React.FC<{
  title: string;
  text: string;
  className?: string;
}> = ({ text, title, className }) => {
  return (
    <div className="text-xs font-semibold">
      <div className="text-[#9494a6] mb-1 font-normal">{title}</div>
      <div className={className ?? ''}>{text}</div>
    </div>
  );
};
