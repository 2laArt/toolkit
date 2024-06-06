import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

export const selectCart = createSelector(
  (state: RootState) => state,
  state => state.cart,
);
export const selectCartAmount = createSelector(selectCart, state =>
  state.reduce((acc, cur, idx, arr) => (acc += cur.count * cur.info.price), 0),
);
export const selectCartName = createSelector(selectCart, state =>
  state.length ? state[0].info.name.split(' ')[0] : 'Cart is Empty',
);
