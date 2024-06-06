type DirectionType = 'DESC' | 'ASC' | undefined;
type RangeType = [number, number];
interface IProductsSearchParams<S extends object> {
  sort?: Array<keyof Partial<S> | DirectionType>;
  range?: [number, number];
  filter?: { [P in keyof S]?: S[P][] };
}
interface IQueryParams<S extends object> {
  id?: number;
  params?: IProductsSearchParams<S>;
  url: string;
}
export type { IProductsSearchParams, DirectionType, IQueryParams, RangeType };
