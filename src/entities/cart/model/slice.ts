import { IUnionProduct } from '@/entities/products/model';
import { IProductInfo } from '@/entities/products/model/slice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { count } from 'console';

interface ICartItem {
  id: number;
  info: IProductInfo;
  images: string[];
  count: number;
}

const initialState = [] as ICartItem[];

const addItem = ({ images, info }: IUnionProduct): ICartItem => ({
  id: info.id,
  info,
  images,
  count: 1,
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => (state = initialState),
    toggleCartItem: (state, { payload }: PayloadAction<IUnionProduct>) => {
      const inCart = state.some(el => el.info.id === payload.info.id);
      if (inCart) return state.filter(el => el.info.id !== payload.info.id);
      return [...state, addItem(payload)];
    },
    switchCartItemCount: (
      state,
      { payload }: PayloadAction<{ count: number; id: number }>,
    ) => {
      const idx = state.findIndex(el => el.id === payload.id);
      if (idx < 0) return;
      let item = state[idx];
      if (item.info.stock < payload.count || payload.count <= 0) return;
      state[idx].count = payload.count;
    },
    addCartItem: (state, action: PayloadAction<IUnionProduct>) => [
      ...state,
      addItem(action.payload),
    ],
    removeCartItem: (state, { payload }: PayloadAction<number>) =>
      state.filter(el => el.info.id !== payload),
  },
});

export const {
  clearCart,
  toggleCartItem,
  addCartItem,
  removeCartItem,
  switchCartItemCount,
} = cartSlice.actions;
export default cartSlice.reducer;
