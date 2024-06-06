import { useAppDispatch } from '@/shared/store';
import React from 'react';
import {
  fetchProductImages,
  fetchProductVariations,
  fetchProducts,
} from '../../model/thunk';
import { RangeType } from '@/shared/api/instance';

export const useFetchCatalog = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const cache = React.useRef<RangeType>();
  const [error, setError] = React.useState<string>('');
  const [isEnd, setEnd] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchCatalog = async (range: RangeType) => {
    if (!!isLoading || isEnd) return;
    if (JSON.stringify(range) === JSON.stringify(cache.current)) {
      return;
    }
    cache.current = range;
    setLoading(() => true);
    const params = { params: { range } };
    await Promise.allSettled([
      dispatch(fetchProducts(params)),
      dispatch(fetchProductImages(params)),
      dispatch(fetchProductVariations(params)),
    ])
      .then(r => {
        if (r[0].status === 'fulfilled') {
          const { length } = r[0].value.payload as Array<unknown>;
          if (length < range[1] - range[0]) setEnd(true);
        }
      })
      .catch(e => setError((e as Error).message))
      .finally(() => setLoading(false));
  };
  return { fetchCatalog, isLoading, error, isEnd };
};
