import React from "react";

function Button({title, bgColor}) {
  return (
    <div>
      <button className={`${bgColor} px-10 py-3 rounded-full`}>{title}</button>
    </div>
  );
}

export default Button;
