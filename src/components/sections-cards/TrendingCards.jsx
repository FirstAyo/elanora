import { useState } from "react";

function TrendingCards({ items }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-10">
        {items.map((product) => {
          const isHovered = hoverId === product.id;

          return (
            <div key={product.id} className="h-[450px] flex flex-col gap-3">
              <img
                src={isHovered ? product.hoverImage : product.image}
                alt={product.title}
                className="h-[85%] w-full object-cover transition-transform duration-1000 ease-in-out cursor-pointer"
                onMouseEnter={() => setHoverId(product.id)}
                onMouseLeave={() => setHoverId(null)}
              />
              <div className="h-[10%]">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TrendingCards;
