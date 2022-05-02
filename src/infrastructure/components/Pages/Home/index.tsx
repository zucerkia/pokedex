import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import PokemonDetail from '../../organisms/PokemonDetail'
import PokemonList from '../../organisms/PokemonList'

// Styles
import styles from './styles.module.scss'

const App: React.FC = () => (
  <main className="relative">
    <header className="h-[96px] w-full top-0 left-0 bg-green">logo</header>
    <div className={styles.container}>
      <Router>
        <PokemonList />
        <Routes>
          <Route path="pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </div>
  </main>
)

export default App
