import React from 'react'
import ReactDOM from 'react-dom/client'
import './infrastructure/components/styles/index.scss'
import Home from './infrastructure/components/pages/Home'
import reportWebVitals from './infrastructure/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
