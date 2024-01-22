import React from 'react'
import BackArrowButton from './BackArrowButton';
import ShoppingBag from './ShoppingBag';
import '../styles.css';



export default function ShoppingCartHeader({items}) {
  return (
    <div className="header-container">
        
        <BackArrowButton />
        <h3>Shopping Cart</h3>
        <ShoppingBag items={items} />
        

    </div>

  )
}
