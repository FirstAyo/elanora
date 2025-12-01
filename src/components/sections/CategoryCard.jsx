import React from "react";

function CategoryCard({ className, images, imageAlt, title }) {
  return (
    <div className="relative">
      <img
        src={images}
        alt={imageAlt}
        className={`${className} transition-transform duration-800 ease-in-out hover:scale-105`}
      />
      <button className="absolute bottom-10 left-16 right-16 py-3 font-semibold bg-white/80 shadow-2xl border border-gray-400">
        {title}
      </button>
    </div>
  );
}

export default CategoryCard;
