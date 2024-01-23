import React from 'react';
import { GoChevronDown } from 'react-icons/go';

export default function DecrementButton({ onClick }) {
  const handleButtonClick = () => {
    // Call the onClick function passed as a prop
    if (onClick) {
      onClick();
    }
    
  };

  return (
    <button className="decrement" onClick={handleButtonClick}>
      <GoChevronDown />
    </button>
  );
}

