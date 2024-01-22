import React from 'react'
import ProductDetails from './ProductDetails';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';


export default function Product() {
  return (
    <div>Product
      <h3>Image</h3>
      <ProductDetails />
      <IncrementButton />
      <DecrementButton />
      <h3>Price</h3>
    </div>
  )
}
