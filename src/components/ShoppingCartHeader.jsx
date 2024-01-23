import React from 'react'
import BackArrowButton from './BackArrowButton';
import ShoppingBag from './ShoppingBag';
import '../styles.css';



export default function ShoppingCartHeader({items}) {
  return (
    <div className="shopping-header-container">
        
        <BackArrowButton />
        <h2 class="shopping-cart-title">Shopping Cart</h2>
        <ShoppingBag items={items} />
        

    </div>

  )
}
