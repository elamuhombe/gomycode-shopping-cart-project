import React from 'react'
import ProductDetails from './ProductDetails';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';


export default function Product({item}) {
  const {name,picture,price,qty} = item
  return (
    <div style={{display:"flex"}}>
      <img src={picture} alt={name} width={'100px'} height={'100px'} />
      <ProductDetails />
     <div style={{display:"flex",flexDirection:"column"}}> 
      <IncrementButton />
      <DecrementButton />
      </div>
      <h3>${price * qty}</h3>
    </div>
  )
}
