import { useState } from "react";
import { ShoppingCartBody } from "./components";

import "./App.css";
import { ShoppingCartHeader } from "./components";

function App() {
  const [items, setItems] = useState([
    {
      picture: "/images/nike.jpg",
      name: "Nike",
      category: "Superstar",
      size: "8.5",
      qty: 1,
      price: 239.55,
    },
    {
      picture: "/images/t-shirt.jpg",
      name: "H&M",
      category: "t-shirt",
      size: "S",
      qty: 1,
      price: 14.99,
    },
    {
      picture: "/images/bag.jpg",
      name: "Gucci",
      category: "CG Marmont",
      size: null,
      qty: 1,
      price: 1850,
    },
  ]);

  return (
    <>
      <div>
        {/* Shopping Cart Header */}
        <ShoppingCartHeader items={items} />

        {/* ShoppingCartBody */}
        <ShoppingCartBody items={items} />
      </div>
    </>
  );
}

export default App;
