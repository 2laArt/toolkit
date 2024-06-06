import { createSlice } from '@reduxjs/toolkit';

import {
  fetchProductImages,
  fetchProductVariations,
  fetchProducts,
} from './thunk';
import {
  IProduct,
  IProductImage,
  IProductVariation,
} from '@/entities/product-parts/model';

export interface IProductInfo {
  id: number;
  name: string;
  description: string;
  category_id: number;
  price: number;
  stock: number;
}

export interface IUnionProduct {
  info: IProductInfo;
  images: string[];
}
export type ProductsType = { [keyof: number]: IUnionProduct };

const initialState = {} as ProductsType;

const addFields = <T>({
  newState,
  state,
  id,
}: {
  state: ProductsType;
  id: number;
  newState: T;
}) => {
  if (state.hasOwnProperty(id)) {
    return {
      ...state[id],
      info: { ...state[id].info, ...newState },
    };
  }

  return {
    info: { ...newState } as IProductInfo,
    images: [],
    isFinish: false,
  } as IUnionProduct;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: state => (state = initialState),
  },
  extraReducers(builder) {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, { meta, payload, type }) => {
        payload.forEach(({ category_id, description, id, name }: IProduct) => {
          const newState = { category_id, description, id, name };
          state[id] = addFields({ id, newState, state });
        });
      },
    );
    builder.addCase(
      fetchProductImages.fulfilled,
      (state, { meta, payload, type }) => {
        payload.forEach(({ image_url, id }: IProductImage) => {
          if (state.hasOwnProperty(id)) {
            state[id] = {
              ...state[id],
              images: [...state[id].images, image_url],
            };
          }
        });
      },
    );
    builder.addCase(
      fetchProductVariations.fulfilled,
      (state, { meta, payload, type }) => {
        payload.forEach(({ id, price, stock }: IProductVariation) => {
          const newState = { price, stock };
          state[id] = addFields({ id, newState, state });
        });
      },
    );
  },
});

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
