import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

const selectBase = createSelector(
  (state: RootState) => state,
  state => state.products,
);

export const selectProducts = createSelector(selectBase, state =>
  Object.entries(state),
);
