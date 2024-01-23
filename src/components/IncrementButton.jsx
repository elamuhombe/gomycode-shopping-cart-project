import React from 'react'
import { GoChevronUp } from "react-icons/go";


export default function IncrementButton({ onClick }) {
  const handleButtonClick = () => {
    // Call the onClick function passed as a prop
    if (onClick) {
      onClick();
    }
    
  };

  return (
    <button className="increment" onClick={handleButtonClick}>
      <GoChevronUp />
    </button>
  );
}