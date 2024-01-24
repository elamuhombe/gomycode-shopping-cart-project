import React from 'react'
// import { GoChevronUp } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";



export default function IncrementButton({ handleItemChange, index }) {
  const handleButtonClick = () => {
    // Call the onClick function passed as a prop
   handleItemChange(index, '+')
  };

  return (
    <span className="increment-button" onClick={handleButtonClick}>
      {/* <GoChevronUp /> */}
       <IoMdArrowDropup />
    </span>
  );
}