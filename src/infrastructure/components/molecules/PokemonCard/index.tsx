import React from 'react'
import PokemonName from '../../atoms/PokemonName'

type PokemonCardProps = {
  img: string
  name: string
  id: string
}
const PokemonCard: React.FC<PokemonCardProps> = ({ img, name, id }) => (
  <div className="relative rounded-lg grid place-content-center max-w-[130px] shadow pt-8 overflow-hidden bg-amber-50">
    <span className="absolute top-0 right-0 w-8 h-8 bg-emerald-500 text-white rounded-bl-lg grid place-content-center">
      {id}
    </span>
    <figure className="w-[96px] h-[96px]">
      <img className="w-full h-full drop-shadow-lg" src={img} alt={name} />
    </figure>
    <PokemonName name={name} />
  </div>
)

export default PokemonCard
