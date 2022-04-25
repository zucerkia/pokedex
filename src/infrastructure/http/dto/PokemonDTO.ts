type Ability = {
  name: string
  url: string
}

type Type = {
  name: string
  url: string
}

export interface PokemonDTO {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: { ability: Ability; is_hidden: boolean; slot: number }[]
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }
  types: { slot: number; type: Type }[]
}
