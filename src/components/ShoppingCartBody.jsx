import React from 'react'
import Product from './Product';




export default function ShoppingCartBody({items}) {
  return (
    <div>
        <h3>{items.length} items</h3>
        <div>
          {
            items.map((item,index) => <Product key = {index} item = {item} />)
          }
        </div>
        
        
        
    </div>
  )
}
