import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import "../styles.css";

export default function ShoppingBag({items}) {
  return (
    <div className="bag-container">
      
        <div className="circle">{items.length}</div>
        <FiShoppingBag className="bag" />
    </div>
  )
}
