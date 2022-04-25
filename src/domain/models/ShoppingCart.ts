import { Product } from './Product'

export type ShoppingCartId = string
export type ShoppingCart = {
  id: ShoppingCartId
  items: Product[]
}
