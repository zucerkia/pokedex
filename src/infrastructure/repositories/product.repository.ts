import http from '../http/http'
import { PokemonDTO } from '../http/dto/PokemonDTO'
import { AllPokemonDTO } from '../http/dto/AllPokemonDTO'
import { Product } from '../../domain/models/Product'

const POKE_API = 'https://pokeapi.co/api/v2'

const productRepository = {
  getProducts: async (limit: number) => {
    const pokemons = await http.get<AllPokemonDTO>(
      `${POKE_API}/pokemon?limit=${limit}&offset=0`
    )

    const pokemonDetails = await Promise.all(
      pokemons.results.map((pokemon) => http.get<PokemonDTO>(pokemon.url))
    )

    return pokemonDetails.map(
      (pokemonDto): Product => ({
        id: `${pokemonDto.id}-${pokemonDto.name}`,
        item: {
          id: String(pokemonDto.id),
          name: pokemonDto.name,
          abilities: pokemonDto.abilities.map(({ ability }) => ability.name),
          height: pokemonDto.height,
          weight: pokemonDto.weight,
          type: pokemonDto.types.map(({ type }) => type.name),
          level: pokemonDto.base_experience,
          img: pokemonDto.sprites.front_default as string,
        },
        price: Math.floor(Math.random() * (100000 - 1000 + 1)) + 100000,
      })
    )
  },

  getProductById: async (id: number) => {
    const pokemonDto = await http.get<PokemonDTO>(`${POKE_API}/pokemon/${id}`)
    const product: Product = {
      id: `${pokemonDto.id}-${pokemonDto.name}`,
      item: {
        id: String(pokemonDto.id),
        name: pokemonDto.name,
        abilities: pokemonDto.abilities.map(({ ability }) => ability.name),
        height: pokemonDto.height,
        weight: pokemonDto.weight,
        type: pokemonDto.types.map(({ type }) => type.name),
        level: pokemonDto.base_experience,
        img: pokemonDto.sprites.front_default as string,
      },
      price: Math.floor(Math.random() * (100000 - 1000 + 1)) + 100000,
    }
    return product
  },
}

export default productRepository
