import React from 'react';
import { GoChevronDown } from 'react-icons/go';

export default function DecrementButton({ handleItemChange, index }) {
  const handleButtonClick = () => {
    // Call the onClick function passed as a prop
    handleItemChange(index, '-')
  };

  return (
    <button className="decrement" onClick={handleButtonClick}>
      <GoChevronDown />
    </button>
  );
}

