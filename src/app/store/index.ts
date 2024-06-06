import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import productsSlice, {
  IUnionProduct,
  ProductsType,
} from '@/entities/products/model/slice';
import cartSlice from '@/entities/cart/model/slice';
import { loadState, saveState } from '@/entities/cart/model/local';
import { PersistPartial } from 'redux-persist/es/persistReducer';
enableMapSet();
const rootReducer = combineReducers({
  products: productsSlice,
  cart: cartSlice,
});

const preloadedState: any = {
  cart: loadState(),
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export const persister = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
