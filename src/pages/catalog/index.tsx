import { useFetchCatalog } from '@/entities/products/lib/use-fetch-catalog';
import { selectProducts } from '@/entities/products/model';
import { useAppSelector } from '@/shared/store';
import { ProductCart } from '@/widgets/product-cart';
import React from 'react';
import { useObserveCatalog } from './lib/use-observe-catalog';
import { useSearchParams } from 'react-router-dom';

const productsRange = 10;

const addToCart = () => {};

export const Catalog: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const isFinish = React.useRef(false);
  const isFetch = React.useRef(false);
  const products = useAppSelector(selectProducts);
  const { error, fetchCatalog, isLoading, isEnd } = useFetchCatalog();

  const setRange = () => {
    const range = params.get('range');
    if (!range) {
      params.set('range', `0,${productsRange}`);
      setParams(params);
      return;
    }
    const nextRange = range.split(',').map(el => productsRange + +el);
    params.set('range', nextRange.join(','));
    setParams(params);
  };

  const { area, connect, disconnect, endOfScroll } =
    useObserveCatalog(setRange);

  React.useEffect(() => {
    if (!params.get('range')) setRange();
  }, []);
  React.useEffect(() => {
    const range = params.get('range');
    if (!range) return;

    fetchCatalog(range.split(',') as any);
  }, [params]);
  React.useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  return (
    <div ref={area}>
      <h2 className="mb-5 mt-8 text-xl font-bold">Каталог товаров</h2>
      <div className="grid grid-cols-3  gap-x-4 gap-y-10 max-w-4xl">
        {products.map(([key, value]) => (
          <ProductCart images={value.images} info={value.info} key={key} />
        ))}
      </div>
      {!isEnd && (
        <div
          ref={endOfScroll}
          className={
            isLoading
              ? 'mx-auto border-t border-l border-green-400 animate-spin rounded-full w-8 h-8'
              : ''
          }
        />
      )}
      {isEnd && <div className="text-3xl my-auto">END</div>}
    </div>
  );
};
