import {
  selectCart,
  selectCartAmount,
  selectCartName,
} from '@/entities/cart/model/selector';
import { clearCart } from '@/entities/cart/model/slice';
import { paths } from '@/shared/paths';
import { Button } from '@/shared/ui';
import { OrderForm } from '@/widgets/order-form';
import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export interface IOrder {
  id: string;
  image: string;
  name: string;
  status: string;
  totalAmount: number;
  address: string;
  date: string;
  length: number;
}

const orderNumber = () =>
  Math.random()
    .toString(32)
    .substring(0, 6)
    .replace(/(\S{3})(\S{3})/, '$1-$2');

export const Order: React.FC = () => {
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectCartAmount);
  const orderName = useSelector(selectCartName);
  const dispatch = useDispatch();
  const methods = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: FieldValues) => {
    const order: IOrder = {
      id: orderNumber(),
      image: cart[0]?.images[0] ?? '/vite.svg',
      name: orderName,
      status: 'Оплачен/Завершён',
      totalAmount,
      address: data.address,
      date: `${data.date}/${data.time}`,
      length: cart.length,
    };
    const historyLocal = localStorage.getItem('history');
    const history = historyLocal ? JSON.parse(historyLocal) : [];
    localStorage.setItem('history', JSON.stringify([...history, order]));
    methods.reset();
    dispatch(clearCart());
    navigate(paths.ordersHistory);
  };

  return (
    <FormProvider {...methods}>
      <h1 className="my-8 font-bold text-xl"> Доставка </h1>
      <div className="flex gap-20 [&>*]:w-72">
        <OrderForm />

        <div>
          <div className="bg-[#f0f4fb] p-5 rounded-3xl mb-2 text-[#727280] text-sm">
            <div className="flex justify-between">
              <div>Стоимость товаров:</div>
              <div>{totalAmount} P</div>
            </div>
            <div className="flex justify-between ">
              <div>Стоимость доставки:</div>
              <div>0 P</div>
            </div>
            <div className="flex justify-between mt-4 text-base">
              <div>Итого:</div>
              <div className="text-black font-semibold">{totalAmount} P</div>
            </div>
          </div>
          <Submit onSubmit={onSubmit} />
        </div>
      </div>
    </FormProvider>
  );
};
const Submit: React.FC<{ onSubmit: SubmitHandler<FieldValues> }> = ({
  onSubmit,
}) => {
  const { handleSubmit } = useFormContext();
  return (
    <Button
      variant="blue"
      className="w-full rounded-full"
      onClick={handleSubmit(onSubmit)}
    >
      Submit
    </Button>
  );
};
