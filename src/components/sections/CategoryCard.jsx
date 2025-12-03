import React from "react";

function CategoryCard({ className, images, imageAlt, title }) {
  return (
    <div className="relative">
      <img
        src={images}
        alt={imageAlt}
        className={`${className} transition-transform duration-700 ease-in-out hover:scale-105 cursor-pointer`}
      />
      <button className="absolute bottom-10 left-16 right-16 py-3 font-semibold bg-white/80 shadow-2xl border border-gray-400 cursor-pointer transition duration-700 hover:bg-black hover:text-white">
        {title}
      </button>
    </div>
  );
}

export default CategoryCard;
