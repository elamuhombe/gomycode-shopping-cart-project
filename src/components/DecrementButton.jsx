import React from 'react';
// import { GoChevronDown } from 'react-icons/go';
import { IoMdArrowDropdown } from "react-icons/io";


export default function DecrementButton({ handleItemChange, index }) {
  const handleButtonClick = () => {
    // Call the onClick function passed as a prop
    handleItemChange(index, '-')
  };

  return (
    <span className="decrement-button" onClick={handleButtonClick}>
      {/* <GoChevronDown />  */}
      <IoMdArrowDropdown />
    </span>
  );
}

