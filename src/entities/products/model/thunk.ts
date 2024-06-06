import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsServices } from './api';
import { IProductsSearchParams } from '@/shared/api/instance';
import {
  IProduct,
  IProductImage,
  IProductVariation,
} from '@/entities/product-parts/model';

type IParams<S extends object> = {
  params?: IProductsSearchParams<S>;
};
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ params }: IParams<IProduct>, thunkAPI) => {
    thunkAPI;
    const response = await productsServices.products(params);
    return response;
  },
);
export const fetchProductImages = createAsyncThunk(
  'products/fetchImages',
  async ({ params }: IParams<IProductImage>, thunkAPI) => {
    thunkAPI;
    const response = await productsServices.images(params);
    return response;
  },
);

export const fetchProductVariations = createAsyncThunk(
  'products/fetchPropertyValues',
  async ({ params }: IParams<IProductVariation>, thunkAPI) => {
    thunkAPI;
    const response = await productsServices.variations(params);
    return response;
  },
);

// export const fetchProductPropertyValues = createAsyncThunk(
//   'products/fetchPropertyValues',
//   async ({ params }: IParams<IProductVariationPropertyValue>, thunkAPI) => {
//     thunkAPI;
//     const response = await productsServices.propertyValues(params);
//     return response;
//   },
// );
