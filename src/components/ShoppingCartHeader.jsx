import React from 'react';
import BackArrowButton from './BackArrowButton';
import ShoppingBag from './ShoppingBag';
import '../styles.css';

// ShoppingCartHeader component receives items and handleClick as props
export default function ShoppingCartHeader({ items, handleClick }) {
  return (
    <div className="shopping-header-container">
      {/* BackArrowButton component with handleClick as a prop */}
      <BackArrowButton handleClick={handleClick} />

      {/* Shopping Cart Title */}
      <h2 className="shopping-cart-title">Shopping Cart</h2>

      {/* ShoppingBag component with items as a prop */}
      <ShoppingBag items={items} />
    </div>
  );
}

