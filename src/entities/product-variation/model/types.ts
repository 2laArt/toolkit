interface IProductVariationProperty {
  id: number;
  name: string;
  type: 0 | 1 | 2 | 3;
}
interface IProductVariationPropertyListValue {
  id: number;
  product_variation_property_id: number;
  value: string;
}
interface ICategory {
  id: number;
  name: string;
  parent_id: number;
}
export type {
  IProductVariationProperty,
  IProductVariationPropertyListValue,
  ICategory,
};
