import React from "react";
import ProductDetails from "./ProductDetails";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

export default function Product({ item, index, handleItemChange }) {
  const { name, picture, price, qty, size, category } = item;
  return (
    <tr className="product-container1">
      <td style={{ display: "flex" }}>
        <img src={picture} alt={name} width={"100px"} height={"50px"} style={{marginRight:"8px"}} />

        <ProductDetails name={name} size={size} category={category} />
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="qty">{qty}</h3>
          <div className="body-button-container">
            <IncrementButton
              handleItemChange={handleItemChange}
              index={index}
            />
            <DecrementButton
              handleItemChange={handleItemChange}
              index={index}
            />
          </div>
        </div>
      </td>
      <td>${price * qty}</td>
    </tr>
  );
}
