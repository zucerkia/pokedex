import React, { useEffect, useState } from 'react'
import { Product } from '../../../../domain/models/Product'
import productService from '../../../../domain/services/Product.service'
import PokemonCard from '../../molecules/PokemonCard'

const PokemonList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      const response = await productService.getProducts(100)
      setProducts(response)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  if (isLoading) {
    return <p>...loading</p>
  }

  return (
    <ul className="grid grid-cols-4 max-w-xl mx-auto gap-4">
      {products.map(({ item }) => (
        <li key={item.id}>
          <PokemonCard name={item.name} img={item.img} id={item.id} />
        </li>
      ))}
    </ul>
  )
}

export default PokemonList
