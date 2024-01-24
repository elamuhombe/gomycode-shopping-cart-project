import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import "../styles.css";

// BackArrowButton component receives handleClick as a prop
export default function BackArrowButton({ handleClick }) {
  return (
    <div>
      {/* IoMdArrowRoundBack icon with onClick event handler */}
      <IoMdArrowRoundBack className="back-arrow" onClick={handleClick} />
    </div>
  );
}

