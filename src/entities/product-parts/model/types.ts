interface IProduct {
  id: number;
  name: string;
  description: string;
  category_id: number;
}
interface IProductImage {
  id: number;
  image_name: string;
  image_url: string;
  product_id: number;
}
interface IProductVariation {
  id: number;
  price: number;
  product_id: number;
  stock: number;
}
interface IProductVariationPropertyValue {
  id: number;
  product_variation_id: number;
  product_variation_property_id: number;
  product_variation_property_list_value_id: number | null;
  value_string: string | null;
  value_int: number | null;
  value_float: number | null;
}
export type {
  IProduct,
  IProductImage,
  IProductVariation,
  IProductVariationPropertyValue,
};
