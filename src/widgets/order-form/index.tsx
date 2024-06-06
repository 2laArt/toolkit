import { InputForm } from '@/features/input';
import React from 'react';
import { FieldValues, UseFormReturn, useFormContext } from 'react-hook-form';

export const OrderForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  return (
    <form className="flex flex-col gap-3">
      <InputDate register={register} />
      <InputForm
        errors={errors}
        placeholder="Куда достать ?"
        name="address"
        type="username"
        register={register}
        options={{ required: true }}
      />
      <InputForm
        errors={errors}
        placeholder="Имя"
        name="name"
        type="username"
        register={register}
        options={{ required: true }}
      />
      <InputForm
        errors={errors}
        placeholder="Телефон"
        name="tel"
        type="tel"
        register={register}
        options={{ required: true }}
      />
    </form>
  );
};
const InputDate: React.FC<{ register: UseFormReturn['register'] }> = ({
  register,
}) => {
  return (
    <label className="w-full ">
      <div className="mb-3 font-semibold">Когда доставить ?</div>
      <div className="flex gap-3 border-gray-200 border rounded-full px-2 py-1">
        <input
          className=" w-full "
          placeholder={`Enter something`}
          type={'date'}
          {...register('date')}
        />
        <input
          className=" w-full "
          placeholder={`Enter something`}
          type={'time'}
          {...register('time')}
        />
      </div>
    </label>
  );
};
