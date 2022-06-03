import React from 'react'

// Components
import PokemonName from '../../atoms/PokemonName'

// Assets
import defaultImage from '../../../assets/img/pokeball.png'

// Styles
import styles from './styles.module.scss'

type PokemonCardProps = {
  img?: string
  name: string
  id: string
}
const PokemonCard: React.FC<PokemonCardProps> = ({ img, name, id }) => (
  <div className={styles.card}>
    <span className={styles.card__badge}>{id}</span>
    <figure className="w-[96px] h-[96px] mb-2">
      <img className="w-full h-full drop-shadow-lg" src={img} alt={name} />
    </figure>
    <PokemonName name={name} />
  </div>
)

PokemonCard.defaultProps = {
  img: defaultImage,
}

export default PokemonCard
