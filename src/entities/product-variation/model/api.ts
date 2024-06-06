import { ApiInstance, IProductsSearchParams } from '@/shared/api/instance';
import type {
  ICategory,
  IProductVariationProperty,
  IProductVariationPropertyListValue,
} from './types';

class CategoriesServices extends ApiInstance {
  categories = async (
    params?: IProductsSearchParams<ICategory>,
    id?: number,
  ): Promise<ICategory[] | ICategory> =>
    this.baseQuery<ICategory>({ url: 'Categories', id, params });

  variationProperties = async (
    id: number,
  ): Promise<IProductVariationProperty[] | IProductVariationProperty> => {
    const param = this.getQueryId(id);
    const url = `ProductVariationProperties${param}`;
    return await this.fetch(url);
  };
  listValues = async (
    id?: number,
  ): Promise<
    IProductVariationPropertyListValue[] | IProductVariationPropertyListValue
  > => {
    const param = this.getQueryId(id);
    const url = `ProductVariationPropertyListValues${param}`;
    return await this.fetch(url);
  };
}

export const categoriesServices = new CategoriesServices('');
