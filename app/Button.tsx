"use client";
import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  console.log(text);
  return (
    <div>
      <button
        className="bg-blue-500 py-2 px-4
       text-white font-semibold"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
