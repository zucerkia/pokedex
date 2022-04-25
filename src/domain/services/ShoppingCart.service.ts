import * as uuid from 'uuid'
import { Product } from '../models/Product'
import { ShoppingCart } from '../models/ShoppingCart'

const hasProduct = (shoppingCart: ShoppingCart, product: Product) =>
  shoppingCart.items.find((item) => item.id === product.id)

const createShoppingCart = (product: Product) => ({
  id: uuid.v4(),
  items: [product],
})

const increaseShoppingCart = (
  shoppingCart: ShoppingCart,
  product: Product
): ShoppingCart => ({
  ...shoppingCart,
  items: [...shoppingCart.items, product],
})

const addProductToShoppingCart = (
  product: Product,
  shoppingCart?: ShoppingCart | null
): ShoppingCart => {
  if (shoppingCart) {
    return hasProduct(shoppingCart, product)
      ? shoppingCart
      : increaseShoppingCart(shoppingCart, product)
  }
  return createShoppingCart(product)
}

export default {
  addProductToShoppingCart,
}
