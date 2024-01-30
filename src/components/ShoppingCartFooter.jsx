import React, { useEffect, useState } from 'react'
import Totals from './Totals'
import Shipping from './Shipping'
import CheckoutButton from './CheckoutButton'


export default function ShoppingCartFooter({ items }) {
    const [subtotal, setSubtotal] = useState(0.00);
    const [shipping, setShipping] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    useEffect(() => {
    const handleSubtotalCalculation = () => {
        setShipping(10)
        let subtotal = items.reduce((sum, product) => sum += product.price * product.qty, 0),
        total = subtotal + shipping
        
        setSubtotal(subtotal)
        setTotal(total)
    }
    handleSubtotalCalculation()
})
    return (
    <div>
       
        <Shipping />
        < Totals subtotal={subtotal} shipping={shipping} total={total}/>
        <CheckoutButton />
    </div>
  )
}
