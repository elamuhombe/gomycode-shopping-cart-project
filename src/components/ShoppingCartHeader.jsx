import React from 'react'
import BackArrowButton from './BackArrowButton';
import ShoppingBag from './ShoppingBag';
import '../styles.css';



export default function ShoppingCartHeader() {
  return (
    <div>
        
        <BackArrowButton />
        <h3>Shopping Cart</h3>
        <ShoppingBag />
        <div className="circle"></div>

    </div>

  )
}
