import React from 'react'

// Models
import { Pokemon } from '../../../../domain/models/Pokemon'

// Styles
import styles from './styles.module.scss'

type PokemonStatsProps = {
  pokemon: Partial<Pokemon>
}
const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  const { id, type, height, weight, abilities, level } = pokemon
  const stats = [
    {
      name: 'NO.',
      value: id,
    },
    {
      name: 'Level',
      value: level,
    },
    {
      name: 'Type',
      value: type?.toString().replace(',', '\n'),
    },
    {
      name: 'Ability',
      value: abilities?.toString(),
    },
    {
      name: 'Height',
      value: height,
    },
    { name: 'Weight', value: weight },
  ]
  return (
    <ul className={styles.stats}>
      {stats.map(({ name, value }, idx) => (
        <li key={`stat-${idx + 1}`} className={styles.stats__item}>
          <span className="text-green-accent font-bold">{name}</span>
          <span className="text-white">{value}</span>
        </li>
      ))}
    </ul>
  )
}

export default PokemonStats
