import React, { useState } from 'react'

export default function Totals({ total, subtotal, shipping}) {


  return (
    <div className='totals-section'>
        <div>
            <span>Subtotal:</span>
            <span className='sub-t'>${subtotal? subtotal.toFixed(2) : '0.00'}</span>
        </div>
        <div>
            <span>Shipping:</span>
            <span className='shipp'>${shipping? shipping.toFixed(2) : '0.00'}</span>
        </div>
        <div>
            <span>Total:</span>
            <span className='tot'>${total? total.toFixed(2) : '0.00'}</span>
        </div>
    </div>
  );
};
