import { ApiInstance, IProductsSearchParams } from '@/shared/api/instance';
import type {
  IProduct,
  IProductImage,
  IProductVariation,
  IProductVariationPropertyValue,
} from './types';

class ProductPartsServices extends ApiInstance {
  private getPart = async <T extends object>(path: string, id: number) => {
    const url = `${path}${this.getQueryId(id)}`;
    return this.fetch<T>(url);
  };
  product = async (id: number) => this.getPart<IProduct>('Products', id);
  images = async (id: number) =>
    this.getPart<IProductImage>('ProductImages', id);
  variation = async (id: number) =>
    this.getPart<IProductVariation>('ProductVariations', id);
  propertyValue = async (id: number) =>
    this.getPart<IProductVariationPropertyValue>(
      'ProductVariationPropertyValues',
      id,
    );
}

export const productPartsServices = new ProductPartsServices(
  import.meta.env.VITE_SERVER,
);
