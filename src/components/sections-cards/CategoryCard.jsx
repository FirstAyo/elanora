import React from "react";

function CategoryCard({ className = "", images, imageAlt, title }) {
  return (
    <div className={`group relative overflow-hidden bg-gray-100 ${className}`}>
      {/* Image */}
      <img
        src={images}
        alt={imageAlt || title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
      />

      {/* Centered label near bottom */}
      <button
        type="button"
        className="
          absolute left-1/2 bottom-4 -translate-x-1/2
          px-8 py-2
          text-sm font-semibold
          bg-white
          border border-gray-300
          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
          transition-colors duration-300
          group-hover:bg-black group-hover:text-white
        "
      >
        {title}
      </button>
    </div>
  );
}

export default CategoryCard;
