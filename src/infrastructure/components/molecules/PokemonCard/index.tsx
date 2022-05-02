import React from 'react'

// Components
import PokemonName from '../../atoms/PokemonName'

// Styles
import styles from './styles.module.scss'

type PokemonCardProps = {
  img: string
  name: string
  id: string
}
const PokemonCard: React.FC<PokemonCardProps> = ({ img, name, id }) => (
  <div className={styles.card}>
    <span className={styles.card__badge}>{id}</span>
    <figure className="w-[96px] h-[96px]">
      <img className="w-full h-full drop-shadow-lg" src={img} alt={name} />
    </figure>
    <PokemonName name={name} />
  </div>
)

export default PokemonCard
