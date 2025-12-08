import { Link } from "react-router-dom";

// Color dots under each product
const COLOR_MAP = {
  navy: "#1e3a8a",
  black: "#000000",
  white: "#ffffff",
  gray: "#9ca3af",
  pink: "#f9a8d4",
  gold: "#fbbf24",
  rose: "#fb7185",
  cream: "#f5f5dc",
  blue: "#3b82f6",
  beige: "#d9c3a3",
  brown: "#92400e",
};

function TrendingCards({ items = [] }) {
  const trendingItems = items.slice(0, 4);

  return (
    <>
      <div className="my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trendingItems.map((product) => {
          const isNew =
            typeof product.badge === "string" &&
            product.badge.toLowerCase() === "new";
          const hasDiscount =
            product.oldPrice != null && product.oldPrice > product.price;

          return (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* IMAGE + BADGES + HOVER ACTIONS */}
              <div className="relative">
                {/* consistent height without being too tall */}
                <div className="aspect-4/3 lg:aspect-4/4 w-full overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* top-left wishlist heart (visual only) */}
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm backdrop-blur transition hover:text-gray-900"
                >
                  ♡
                </button>

                {/* top-right status badge */}
                {product.badge && (
                  <div
                    className={`absolute right-4 top-4 flex h-12 min-w-[3rem] items-center justify-center rounded-full px-3 text-xs font-semibold uppercase tracking-wide text-white shadow-md ${
                      isNew
                        ? "bg-emerald-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {isNew ? "New" : product.badge}
                  </div>
                )}

                {/* bottom “Quick add” bar – appears on hover (desktop) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-black/70 px-4 py-2.5 text-xs text-white opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between gap-3">
                    <span className="line-clamp-1 text-[11px] uppercase tracking-[0.18em] text-gray-200">
                      Quick add
                    </span>
                    <button
                      type="button"
                      className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-900"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>

                {/* optional countdown strip for discounted products */}
                {hasDiscount && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gray-900/90 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gray-100 group-hover:translate-y-[115%] transition-transform duration-300">
                    99d · 19h · 59m · 06s
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                {/* Name */}
                <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 sm:text-base">
                  {product.name}
                </h3>

                {/* Price row */}
                <div className="flex items-baseline gap-2 text-sm">
                  {hasDiscount && (
                    <span className="text-xs text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Meta: type / availability */}
                <p className="text-xs text-gray-500">
                  {product.type}
                  <span className="mx-2 text-gray-300">•</span>
                  {product.availability === "in-stock" ? (
                    <span className="text-emerald-600">In stock</span>
                  ) : (
                    <span className="text-red-500">Out of stock</span>
                  )}
                </p>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: COLOR_MAP[color] || "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile “Add to cart” button (since hover isn’t great on touch) */}
                <button
                  type="button"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-gray-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white sm:hidden"
                >
                  Add to cart
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Load more button */}
      <div className="mb-4 flex justify-center">
        <Link
          to="/products"
          className="rounded-full border border-gray-300 px-8 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white"
        >
          Load more
        </Link>
      </div>
    </>
  );
}

export default TrendingCards;
