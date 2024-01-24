import React from 'react'
import Product from './Product';




export default function ShoppingCartBody({items,setItems})  {
  const handleItemChange = (index,sign) => {
   let updatedItems = items 
    let selectedItem = items.find((item,indx) => index===indx)
    sign ==='+'? selectedItem.qty++ : selectedItem.qty--
    updatedItems[index] = selectedItem
    setItems (updatedItems)
    console.log (updatedItems)
  } 
  return (
    <div className='shopping-cart-body'>
        <h3>{items.length} items</h3>
        <table border= '2px'>
          {
            items.map((item,index) => <Product key = {index} item = {item} handleItemChange = {handleItemChange} index={index} />)
          }
        </table>
        
        
        
    </div>
  )
}
