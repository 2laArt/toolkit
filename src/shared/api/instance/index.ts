import { appHeaders } from '../headers';
import {
  IQueryParams,
  DirectionType,
  IProductsSearchParams,
  RangeType,
} from './types';

class ApiInstance {
  private _baseUrl: string;
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  protected fetch = async <R>(
    url: string,
    config?: RequestInit,
  ): Promise<R> => {
    const response = await fetch(`${this._baseUrl}/${url}`, {
      method: 'get',
      headers: appHeaders,
      ...(config || {}),
    });
    return response.json() as R;
  };
  protected getSearchParams = <T extends object>(params?: T) => {
    if (!params) return '';
    const sp = Object.entries(params).map(([key, value]) => [
      key,
      JSON.stringify(value),
    ]);
    return '?' + new URLSearchParams(sp).toString();
  };
  protected getQueryId = (id: number | string) => {
    return `/${id}`;
  };
  protected baseQuery = async <T extends object>({
    url,
    params,
  }: IQueryParams<T>): Promise<T[] | T> => {
    const searchParams = this.getSearchParams(params);
    const urlStr = `${url}${searchParams}`;
    return await this.fetch(urlStr);
  };
  protected bodyToJson = (body: unknown) => JSON.stringify(body);
}
export {
  ApiInstance,
  type IQueryParams,
  type DirectionType,
  type IProductsSearchParams,
  type RangeType,
};
