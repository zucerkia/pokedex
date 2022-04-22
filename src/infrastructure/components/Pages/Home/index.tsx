import React from 'react'
import logo from '../../../assets/svg/logo.svg'
import './App.scss'

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-red-900 text-5xl">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React today uwu
      </a>
    </header>
  </div>
)

export default App
