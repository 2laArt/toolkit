import {
  IProduct,
  IProductImage,
  IProductVariation,
  IProductVariationPropertyValue,
} from '@/entities/product-parts/model';
import { ApiInstance, IProductsSearchParams } from '@/shared/api/instance';

class ProductsServices extends ApiInstance {
  private fetchList = async <T extends object>(
    path: string,
    params?: IProductsSearchParams<T>,
  ) => {
    const searchParams = this.getSearchParams(params);
    const url = `${path}${searchParams}`;
    return this.fetch<T[]>(url);
  };
  products = async (params?: IProductsSearchParams<IProduct>) =>
    this.fetchList<IProduct>('Products', params);
  images = async (params?: IProductsSearchParams<IProductImage>) =>
    this.fetchList<IProductImage>('ProductImages', params);
  variations = async (params?: IProductsSearchParams<IProductVariation>) =>
    this.fetchList<IProductVariation>('ProductVariations', params);

  propertyValues = async (
    params?: IProductsSearchParams<IProductVariationPropertyValue>,
  ) =>
    this.fetchList<IProductVariationPropertyValue>(
      'ProductVariationPropertyValues',
      params,
    );
}

export const productsServices = new ProductsServices(
  import.meta.env.VITE_SERVER,
);
