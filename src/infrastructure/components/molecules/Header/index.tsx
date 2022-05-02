import React from 'react'

import headerLogo from '../../../assets/img/pokemonLogo.png'

const Header = () => (
  <header className="h-[96px] w-full top-0 left-0 bg-green flex items-center justify-center">
    <img className="w-[200px]" src={headerLogo} alt="pokemon logo" />
  </header>
)

export default Header
