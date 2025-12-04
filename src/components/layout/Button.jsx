import React from "react";

function Button({ title, bgColor }) {
  return (
    <div>
      <button
        className={`${bgColor} px-10 py-3 rounded-full transition duration-500 hover:bg-blue-400 cursor-pointer`}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
