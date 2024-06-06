import { IUnionProduct } from '@/entities/products/model';

const loadState = (): IUnionProduct[] => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return [];
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};
export { loadState, saveState };
