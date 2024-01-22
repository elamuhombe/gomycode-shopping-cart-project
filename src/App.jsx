import { useState } from 'react'
import { ShoppingCartBody } from './components';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
             {/* ShoppingCartBody */}
      <ShoppingCartBody />

      </div>
    </>
  )
}

export default App
