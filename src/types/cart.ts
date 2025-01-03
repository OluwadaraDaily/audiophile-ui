import { ProductProps } from "@/components/atoms/ProductItem/types"


export interface CartItem {
  product: ProductProps,
  quantity: number,
};

export type Cart = CartItem[];