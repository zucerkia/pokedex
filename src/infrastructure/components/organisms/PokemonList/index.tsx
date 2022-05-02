import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Models
import { Product } from '../../../../domain/models/Product'

// Services
import productService from '../../../../domain/services/Product.service'

// Components
import Input from '../../atoms/Input'
import PokemonCard from '../../molecules/PokemonCard'

// Styles
import styles from './styles.module.scss'

const PokemonList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      const response = await productService.getProducts(50)
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

  const sortProducts = (str: string) => {
    if (str) {
      return productService.sortProducts(str, products)
    }
    return products
  }

  if (isLoading) {
    return <p>...loading</p>
  }

  return (
    <div>
      <div className="px-8">
        <Input
          type="text"
          name="search"
          label="Buscar"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          required
        />
      </div>
      <ul className={styles.list}>
        {sortProducts(search).map(({ item }) => (
          <Link to={`/pokemon/${item.id}`} key={item.id}>
            <li>
              <PokemonCard name={item.name} img={item.img} id={item.id} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
