import { selectCart } from '@/entities/cart/model/selector';
import { toggleCartItem } from '@/entities/cart/model/slice';
import { IUnionProduct } from '@/entities/products/model';
import { ProductCategory, ProductImage } from '@/entities/products/ui';
import { Button } from '@/shared/ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ProductCart: React.FC<IUnionProduct> = props => {
  const { images, info } = props;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartIncludes = cart.some(el => el.info.id === info.id);
  const toggle = () => dispatch(toggleCartItem({ images, info }));
  return (
    <div>
      <div className="relative w-64 h-36 mb-2">
        <ProductImage images={images} />
        <ProductCategory category_id={info.category_id} />
      </div>
      <div>
        <div className="max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {info.name}
        </div>
        <div className="text-blue-500 font-bold my-2">от {info.price} Р</div>
        <Button
          variant="outline"
          onClick={toggle}
          className={cartIncludes ? 'text-red-400' : ''}
        >
          {false ? 'Удалить из корзины' : 'Добавить в корзину'}
        </Button>
      </div>
    </div>
  );
};
function state(state: unknown): unknown {
  throw new Error('Function not implemented.');
}
