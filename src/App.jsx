import { useState } from "react";
import "./App.css";

import { ShoppingCartFooter, ShoppingCartHeader, ShoppingCartBody } from "./components";


// Main functional component named App
function App() {
  // State to manage shopping cart items
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

  // State to manage the visibility of app components
  const [showAppComponents, setShowAppComponents] = useState(true);

  // Function to toggle the visibility of components
  const handleClick = () => {
    setShowAppComponents(showAppComponents ? false : true);
  };

  // Return statement with JSX to render the App component
  return (
    <>
      {/* Check if showAppComponents is true before rendering */}
      {showAppComponents && (
        <div>
          {/* Conditionally render components based on showAppComponents */}
          {/* Shopping Cart Header */}
          <ShoppingCartHeader items={items} handleClick={handleClick} />

          {/* ShoppingCartBody */}
          <ShoppingCartBody items={items} />
          {/* Shopping cart footer below */}
          <ShoppingCartFooter items={items}/>
          
        </div>
      )}
    </>
  );
}

export default App;
