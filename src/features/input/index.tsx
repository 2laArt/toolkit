import { type FC } from 'react';
import type {
  FieldErrors,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';
export interface IInputProps {
  register: UseFormReturn['register'];
  name: string;
  type: InputFormTypes;
  className?: string;
  errors?: FieldErrors<object>;
  options?: RegisterOptions;
  placeholder?: string;
}
type InputFormTypes =
  | 'email'
  | 'number'
  | 'password'
  | 'text'
  | 'username'
  | 'date'
  | 'time'
  | 'tel';

interface IErrorInput {
  errors: FieldErrors<object>;
  name: string;
}

export const InputForm: FC<IInputProps> = ({
  name,
  type,
  errors,
  options: optionSettings,
  register,
  placeholder,
  className,
  ...props
}) => {
  const options = optionSettings;
  const inputError = ({ errors, name }: IErrorInput): string | undefined => {
    const errorName = errors[name as keyof typeof errors];
    return errorName && errorName.message;
  };
  return (
    <label className="w-full ">
      <div className="mb-3 font-semibold">{placeholder}</div>
      <input
        className="border w-full border-gray-200 rounded-full px-2 py-1"
        placeholder={`Enter something`}
        type={type}
        autoComplete={name === 'password' ? 'on' : 'off'}
        {...register(name, options)}
        {...props}
      />
      {errors && (
        <div className="text-red-400">{inputError({ errors, name })}</div>
      )}
    </label>
  );
};
