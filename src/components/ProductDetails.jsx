import React from 'react'

export default function ProductDetails({name,size,category}) {
  return (
    <div className='product-details'>
      <h3>{name}</h3>
      <h4>{category}</h4>
      <h5>{size}</h5>
      

      
        
    </div>
  )
}
