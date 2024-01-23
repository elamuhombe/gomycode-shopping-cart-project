import React from 'react'
import { GoChevronUp } from "react-icons/go";


export default function IncrementButton({ handleItemChange, index }) {
  const handleButtonClick = () => {
    // Call the onClick function passed as a prop
   handleItemChange(index, '+')
  };

  return (
    <button className="increment" onClick={handleButtonClick}>
      <GoChevronUp />
    </button>
  );
}