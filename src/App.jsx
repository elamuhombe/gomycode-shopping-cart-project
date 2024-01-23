import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shipping from './components/Shipping'
import Totals from './components/Totals'
import CheckoutButton from './components/CheckoutButton'

function App() {
   

  return (
    <>
      <Shipping />
      <Totals />
      <CheckoutButton />         
    </>
  )
}

export default App
