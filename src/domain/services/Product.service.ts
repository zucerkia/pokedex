import productRepository from '../../infrastructure/repositories/product.repository'
import { Product } from '../models/Product'

const productService = {
  getProducts: (limit: number) => productRepository.getProducts(limit),
  getProductById: (id: number) => productRepository.getProductById(id),
  sortProducts: (str: string, products: Product[]) =>
    products.filter(({ item }) => item.name.startsWith(str)),
}

export default productService
