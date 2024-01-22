import { useState } from "react";
import { ShoppingCartBody } from "./components";

import "./App.css";
import { ShoppingCartHeader } from "./components";

function App() {
  const [items, setItems] = useState([
    {
      picture: "",
      name: "Nike",
      category: "Superstar",
      size: "8.5",
      qty: 1,
      price: 239.55,
    },
    {
      picture: "",
      name: "H&M",
      category: "t-shirt",
      size: "S",
      qty: 1,
      price: 14.99,
    },
    {
      picture: "",
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
        <ShoppingCartBody />
      </div>
    </>
  );
}

export default App;
