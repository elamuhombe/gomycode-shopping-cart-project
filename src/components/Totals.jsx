import React from 'react'

export default function Totals({ subtotal, shipping, total}) {
  return (
    <div className='totals-section'>
        <div>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
        </div>
        <div>
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
        </div>
        <div>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
        </div>
    </div>
  );
};
