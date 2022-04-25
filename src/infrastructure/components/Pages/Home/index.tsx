import React from 'react'

// Components
import PokemonList from '../../organisms/PokemonList'

// Styles
import styles from './styles.module.scss'

const App: React.FC = () => (
  <div className={styles.homeContent}>
    <PokemonList />
  </div>
)

export default App
