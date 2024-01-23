import React from 'react'
import ProductDetails from './ProductDetails';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';


export default function Product({item, index, handleItemChange})  {
  const {name,picture,price,qty} = item
  return (
    <div style={{display:"flex"}}>
      <img src={picture} alt={name} width={'100px'} height={'100px'} />
      <ProductDetails />
     <div style={{display:"flex",flexDirection:"column"}}> 
      <IncrementButton handleItemChange = {handleItemChange} index={index} />
      <DecrementButton handleItemChange = {handleItemChange} index={index} />
      </div>
      <h3>${price * qty}</h3>
    </div>
  )
}
