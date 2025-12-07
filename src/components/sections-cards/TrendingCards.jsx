import { useState } from "react";
import { Link } from "react-router-dom";

function TrendingCards({ items }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <>
      <div className="grid gap-6 my-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => {
          const isHovered = hoverId === product.id;

          return (
            <div
              key={product.id}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoverId(product.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              {/* Image area */}
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                {/* Updated aspect ratio (shorter) */}
                <div className="aspect-square w-full">
                  <img
                    src={isHovered ? product.hoverImage : product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Desktop hover overlay */}
                <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <div className="pointer-events-auto flex gap-3">
                    <button className="rounded-full bg-black/80 px-4 py-2 text-xs sm:text-sm font-medium text-white">
                      Quick View
                    </button>
                    <button className="rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-900">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-medium text-slate-900 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="shrink-0 text-sm sm:text-base font-semibold text-slate-900">
                    ${product.price}
                  </p>
                </div>

                <p className="text-xs text-slate-500">
                  In stock · Free shipping over $99
                </p>

                {/* Mobile-only action buttons */}
                <div className="mt-3 flex gap-2 md:hidden">
                  <button className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-900">
                    Quick View
                  </button>
                  <button className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-xs font-medium text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load more */}
      <div className="flex justify-center">
        <Link
          to="/products"
          className="rounded-full border border-slate-300 px-8 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
        >
          Load more
        </Link>
      </div>
    </>
  );
}

export default TrendingCards;
