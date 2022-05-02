import React from 'react'

// Styles
import styles from './styles.module.scss'

type PokemonNameProps = {
  name: string
}
const PokemonName: React.FC<PokemonNameProps> = ({ name }) => (
  <div className={styles.label}>
    <p className="uppercase text-white text-sm font-bold text-center">{name}</p>
  </div>
)

export default PokemonName
