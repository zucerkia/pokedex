import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

// Models
import { Pokemon } from '../../../../domain/models/Pokemon'

// Services
import productService from '../../../../domain/services/Product.service'

// Components
import PokemonName from '../../atoms/PokemonName'
import PokemonStats from '../../molecules/PokemonStats'

import styles from './styles.module.scss'

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setIsLoading(true)
        const response = await productService.getProductById(Number(params.id))
        setPokemon(response.item)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      loadPokemon()
    } else {
      Navigate({ to: '/' })
    }
  }, [params])

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <div className={styles.detail}>
      <PokemonName name={pokemon.name} />
      <img
        className={styles.detail__img}
        src={pokemon?.img as string}
        alt={pokemon?.name}
      />
      <div className={styles.detail__stats}>
        <PokemonStats pokemon={pokemon as Pokemon} />
      </div>
    </div>
  )
}

export default PokemonDetail
