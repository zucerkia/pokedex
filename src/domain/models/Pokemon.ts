export type PokemonId = string
export type Pokemon = {
  id: PokemonId
  name: string
  level: number
  type: string[]
  abilities: string[]
  weight: number
  height: number
  img: string
  typeIcon?: string
}
