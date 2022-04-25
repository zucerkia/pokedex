import productRepository from '../../infrastructure/repositories/product.repository'

const productService = {
  getProducts: (limit: number) => productRepository.getProducts(limit),
}

export default productService
