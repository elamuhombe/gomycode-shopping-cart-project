import { useState } from 'react'
import './App.css'
import { ShoppingCartHeader } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/* Shopping Cart Header */}
      <ShoppingCartHeader />
      </div>
      
    </>
  )
}

export default App
