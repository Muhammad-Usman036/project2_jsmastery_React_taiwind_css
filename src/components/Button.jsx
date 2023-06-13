import React from "react";

const Button = () => {
  return (
    <button
      type="button"
      className=" mt-10 py-4 px-6 bg-blue-gradient font-pippins font medium text-[18px] text-primary outline-none ${styles} rounded-[10px]"
    >
      Get Started
    </button>
  );
};

export default Button;
