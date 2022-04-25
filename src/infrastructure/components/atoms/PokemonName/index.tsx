import React from 'react'

type PokemonNameProps = {
  name: string
}
const PokemonName: React.FC<PokemonNameProps> = ({ name }) => (
  <div className="flex justify-center items-center">
    <p className="uppercase text-">{name}</p>
  </div>
)

export default PokemonName
