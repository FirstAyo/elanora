import { useState } from "react";
import { Link } from "react-router-dom";

function TrendingCards({ items }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {items.map((product) => {
          const isHovered = hoverId === product.id;

          return (
            <div
              key={product.id}
              className="h-[450px] flex flex-col gap-3 group"
            >
              <div className="relative h-[85%] w-full overflow-hidden cursor-pointer">
                <img
                  src={isHovered ? product.hoverImage : product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-in-out cursor-pointer"
                  onMouseEnter={() => setHoverId(product.id)}
                  onMouseLeave={() => setHoverId(null)}
                />

                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 
                  group-hover:opacity-100"
                >
                  <div className="flex gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-black/80 rounded-full cursor-pointer">
                      Quick View
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[10%]">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/products" className="border rounded-full px-8 py-2">Load more</Link>
      </div>
    </>
  );
}

export default TrendingCards;
