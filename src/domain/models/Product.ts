import { Pokemon } from './Pokemon'

export type ProductId = string
export type Product = {
  id: ProductId
  price: number
  item: Pokemon
}
