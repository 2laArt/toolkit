import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from './types';



const initialState = {} as ICategory

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearBookListStore: state => {
      state.products = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, { meta, payload, type }) => {
        
        state.products = payload as any;
      },
    );
  },
});

export const { clearBookListStore } = productsSlice.actions;
export default productsSlice.reducer;
