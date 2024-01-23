import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import "../styles.css";

// ShoppingBag component receives items as a prop
export default function ShoppingBag({ items }) {
  return (
    <div className="bag-container">
      {/* Circular badge displaying the number of items */}
      <div className="circle">{items.length}</div>

      {/* FiShoppingBag icon */}
      <FiShoppingBag className="bag" />
    </div>
  );
}
