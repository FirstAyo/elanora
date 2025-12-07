import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

/**
 * Utility map for color name -> hex value
 * Used for the small color circles on each product card.
 */
const COLOR_MAP = {
  beige: "#d9c3a3",
  black: "#000000",
  "black/yellow": "#222222",
  blue: "#3b82f6",
  bluell: "#6ea8ff",
  gray: "#9ca3af",
  green: "#16a34a",
  pink: "#ec4899",
  gold: "#facc15",
  rose: "#fb7185",
  cream: "#e5e5d4",
  white: "#ffffff",
  brown: "#92400e",
};

/**
 * ProductsPage
 *
 * Props:
 *  - products: array of product objects
 *      (same shape as your products.json items)
 */
function ProductsPage({ products = [] }) {
  // --- state for basic filtering + sorting ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [availability, setAvailability] = useState("all"); // "all" | "in-stock" | "out-of-stock"
  const [selectedColor, setSelectedColor] = useState("all");
  const [sortValue, setSortValue] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // NEW: controls the mobile filter drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // How many items per page in the grid
  const ITEMS_PER_PAGE = 9;

  // --- derive filter options from data (from props) ---
  const categories = useMemo(() => {
    const counts = products.reduce((acc, product) => {
      const key = product.category || "All";
      acc[key] = (acc[key] || 0) + 1;
      // "All" is logical group; also increment All
      acc["All"] = (acc["All"] || 0) + 1;
      return acc;
    }, {});
    // Convert to array & keep a fixed order with "All" first
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) =>
        a.name === "All"
          ? -1
          : b.name === "All"
          ? 1
          : a.name.localeCompare(b.name)
      );
  }, [products]);

  const brands = useMemo(() => {
    const counts = products.reduce((acc, p) => {
      const key = p.brand || "Other";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [products]);

  // Simple color list for sidebar – only colors present in data
  const colorFilters = useMemo(() => {
    const counts = products.reduce((acc, p) => {
      (p.colors || []).forEach((c) => {
        acc[c] = (acc[c] || 0) + 1;
      });
      return acc;
    }, {});
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [products]);

  // --- filtered + sorted products ---
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Filter by category
    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by availability
    if (availability !== "all") {
      list = list.filter((p) => p.availability === availability);
    }

    // Filter by color
    if (selectedColor !== "all") {
      list = list.filter((p) => p.colors && p.colors.includes(selectedColor));
    }

    // Sort
    if (sortValue === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortValue === "newest") {
      // naive sort by id as a stand-in for "new"
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [products, selectedCategory, availability, selectedColor, sortValue]);

  // --- pagination calculations ---
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const pageItems = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // "Sale products" sidebar – take a few items that have a badge or oldPrice
  const saleProducts = useMemo(
    () => products.filter((p) => p.badge || p.oldPrice).slice(0, 3),
    [products]
  );

  /**
   * Shared filter sidebar content.
   * We reuse this inside the desktop sidebar and the mobile drawer
   * so the actual filter UI only lives in one place.
   */
  const filterContent = (
    <>
      {/* Product categories */}
      <section className="">
        <h2 className="mb-2 text-base font-semibold">Product categories</h2>
        <div className="h-40 overflow-y-auto border-l border-gray-200 pl-3">
          <ul className="space-y-1 text-sm">
            {categories.map((cat) => (
              <li key={cat.name}>
                <button
                  type="button"
                  className={`flex w-full items-center gap-2 text-left hover:text-black ${
                    selectedCategory === cat.name
                      ? "font-semibold text-black"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setCurrentPage(1);
                    setIsFilterOpen(false); // close drawer when a filter is chosen on mobile
                  }}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-gray-400">({cat.count})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Availability filter */}
      <section>
        <h3 className="my-4 lg:my-2 text-base font-semibold">Availability</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              value="all"
              checked={availability === "all"}
              onChange={() => {
                setAvailability("all");
                setCurrentPage(1);
              }}
            />
            <span>All</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              value="in-stock"
              checked={availability === "in-stock"}
              onChange={() => {
                setAvailability("in-stock");
                setCurrentPage(1);
              }}
            />
            <span>In stock</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              value="out-of-stock"
              checked={availability === "out-of-stock"}
              onChange={() => {
                setAvailability("out-of-stock");
                setCurrentPage(1);
              }}
            />
            <span>Out of stock</span>
          </label>
        </div>
      </section>

      {/* Color filter */}
      <section>
        <h3 className="my-4 lg:my-2 text-base font-semibold">Color</h3>
        <div className="h-40 overflow-y-auto border-l border-gray-200 pl-3">
          <ul className="space-y-1 text-sm">
            <li>
              <button
                type="button"
                className={`flex items-center gap-2 ${
                  selectedColor === "all"
                    ? "font-semibold text-black"
                    : "text-gray-700"
                }`}
                onClick={() => {
                  setSelectedColor("all");
                  setCurrentPage(1);
                }}
              >
                <span className="inline-block h-4 w-4 rounded-full border border-gray-400 bg-white" />
                <span>All colors</span>
              </button>
            </li>
            {colorFilters.map((c) => (
              <li key={c.name}>
                <button
                  type="button"
                  className={`flex items-center gap-2 ${
                    selectedColor === c.name
                      ? "font-semibold text-black"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedColor(c.name);
                    setCurrentPage(1);
                  }}
                >
                  <span
                    className="inline-block h-4 w-4 rounded-full border border-gray-400"
                    style={{
                      backgroundColor: COLOR_MAP[c.name] || "#e5e7eb",
                    }}
                  />
                  <span>
                    {c.name} <span className="text-gray-400">({c.count})</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Size filter – visual only for now */}
      <section>
        <h3 className="my-4 lg:my-2 text-base font-semibold">Size</h3>
        <div className="space-y-1 border-l border-gray-200 pl-3 text-sm">
          {["XS", "S", "Small", "M", "Medium", "L"].map((s) => (
            <label key={s} className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="h-3.5 w-3.5" />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Brand filter – visual only */}
      <section>
        <h3 className="my-4 lg:my-2 text-base font-semibold">Brand</h3>
        <div className="h-40 overflow-y-auto border-l border-gray-200 pl-3 text-sm">
          {brands.map((b) => (
            <label
              key={b.name}
              className="flex items-center gap-2 text-gray-700"
            >
              <input type="checkbox" className="h-3.5 w-3.5" />
              <span>
                {b.name} <span className="text-gray-400">({b.count})</span>
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Sale products mini-list */}
      <section className="mb-32">
        <h3 className="my-4 lg:my-2 text-base font-semibold">Sale products</h3>
        <div className="space-y-3">
          {saleProducts.map((p) => (
            <div key={p.id} className="flex gap-3 text-sm">
              <div className="h-16 w-16 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="line-clamp-2 text-gray-800">{p.name}</p>
                <div className="mt-1 space-x-1 text-xs">
                  {p.oldPrice && (
                    <span className="line-through text-gray-400">
                      ${p.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="font-semibold text-red-500">
                    ${p.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <>
      {/* HERO SECTION – title + breadcrumb over background image */}
      <section className="relative h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/summer.jpg"
          alt="Products hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative flex h-full items-center">
          <Container>
            <div className="space-y-3 px-4 text-center text-white">
              <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                All
              </h1>
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center justify-center gap-1 text-sm text-gray-200">
                  <li>
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="font-semibold">All</li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </section>

      {/* TOP BAR – view toggles + sort dropdown */}
      <section className="border-b border-gray-200 bg-white px-4">
        <Container>
          <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            {/* LEFT: mobile Filter button + view toggles */}
            <div className="flex items-center justify-between gap-4 md:justify-start">
              {/* NEW: top "Filter" button (mobile only) */}
              <button
                type="button"
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 text-sm text-gray-700 lg:hidden"
              >
                <span className="text-lg leading-none">☰</span>
                <span>Filter</span>
              </button>

              {/* View toggle icons – purely visual, not wired */}
              <div className="flex items-center justify-center gap-2">
                <button className="flex h-9 w-9 items-center justify-center border border-gray-300 text-xs text-gray-500">
                  ▢
                </button>
                <button className="flex h-9 w-9 items-center justify-center border border-gray-300 text-xs text-gray-500">
                  ▣
                </button>
                <button className="flex h-9 w-9 items-center justify-center border border-gray-300 text-xs text-gray-500">
                  ▤
                </button>
                <button className="flex h-9 w-9 items-center justify-center border border-black text-xs text-black">
                  ▥
                </button>
              </div>
            </div>

            {/* Sort dropdown */}
            <div className="flex justify-center md:justify-end">
              <label className="relative inline-flex items-center">
                <select
                  className="w-40 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </label>
            </div>
          </div>
        </Container>
      </section>

      {/* MAIN CONTENT – sidebar + product grid */}
      <Container>
        <div className="relative my-8 flex flex-col gap-10 px-4 lg:flex-row">
          {/* ========== MOBILE FILTER DRAWER + OVERLAY ========== */}
          {/* Sliding drawer from the left (mobile only) */}
          <div
            className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[80%] transform bg-white shadow-xl transition-transform duration-300 lg:hidden ${
              isFilterOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Drawer header with close button */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="text-sm font-semibold">Filter</span>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="rounded-full px-2 text-xl leading-none hover:bg-gray-100"
                aria-label="Close filters"
              >
                &times;
              </button>
            </div>

            {/* Scrollable filter content */}
            <div className="h-[calc(100vh-56px)] overflow-y-auto px-4 py-4">
              {filterContent}
            </div>
          </div>

          {/* Dark overlay behind drawer */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/40 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* NEW: Sticky vertical "Filter" pill on the left (mobile only) */}
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="fixed left-1 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/95 px-1 py-3 text-[10px] font-semibold tracking-[0.2em] text-gray-700 shadow-md border border-gray-200 lg:hidden"
          >
            {/* Rotate text to make a vertical-looking pill */}
            <span className="-rotate-90">FILTER</span>
          </button>

          {/* ================= LEFT SIDEBAR (DESKTOP) ================= */}
          <aside className="hidden space-y-8 lg:block lg:w-[20%]">
            {filterContent}
          </aside>

          {/* ================= RIGHT – PRODUCT GRID ================= */}
          <section className="lg:w-[80%]">
            {pageItems.length === 0 ? (
              <p className="text-center text-gray-500">
                No products match your filters.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((product) => (
                  // group = lets us trigger hover styles inside the card
                  <article key={product.id} className="group h-full">
                    {/* Card container */}
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                      {/* IMAGE AREA */}
                      <div className="relative w-full overflow-hidden">
                        {/* shorter aspect ratio so card height is reduced */}
                        <div className="aspect-[4/3] w-full">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>

                        {/* badge (sale / new / pre-order) */}
                        {product.badge && (
                          <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white shadow-sm">
                            {product.badge}
                          </span>
                        )}

                        {/* subtle bottom gradient on hover */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      {/* CONTENT AREA */}
                      <div className="flex flex-1 flex-col gap-2 px-3 py-3 sm:px-4 sm:py-4">
                        {/* Title */}
                        <h3 className="line-clamp-2 text-sm font-medium text-gray-900 hover:underline">
                          {product.name}
                        </h3>

                        {/* Price row */}
                        <div className="flex items-baseline gap-2 text-sm">
                          {product.oldPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="font-semibold text-gray-900">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Color dots */}
                        {product.colors && product.colors.length > 0 && (
                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                            {product.colors.map((c) => (
                              <span
                                key={c}
                                className="inline-block h-4 w-4 rounded-full border border-gray-300"
                                style={{
                                  backgroundColor: COLOR_MAP[c] || "#e5e7eb",
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {/* Bottom action row */}
                        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                          <span className="uppercase tracking-wide">
                            {product.availability === "in-stock"
                              ? "In stock"
                              : "Out of stock"}
                          </span>

                          <button
                            type="button"
                            className="rounded-full border border-gray-300 px-3 py-1 font-medium text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-5 border-t border-gray-300 py-5">
              <button
                type="button"
                onClick={() => handlePageChange(safePage - 1)}
                disabled={safePage === 1}
                className={
                  safePage === 1
                    ? "cursor-not-allowed text-gray-300"
                    : "text-gray-600 hover:text-black"
                }
              >
                Prev
              </button>

              <div className="flex items-center gap-5">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;

                  if (totalPages > 7 && page !== 1 && page !== totalPages) {
                    if (Math.abs(page - safePage) > 1) {
                      if (page === 2 || page === totalPages - 1) {
                        return (
                          <span key={page} className="px-1 text-gray-400">
                            …
                          </span>
                        );
                      }
                      return null;
                    }
                  }

                  const isActive = page === safePage;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={
                        isActive
                          ? "font-semibold text-black underline underline-offset-4"
                          : "text-gray-600 hover:text-black"
                      }
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(safePage + 1)}
                disabled={safePage === totalPages}
                className={
                  safePage === totalPages
                    ? "cursor-not-allowed text-gray-300"
                    : "text-gray-600 hover:text-black"
                }
              >
                Next
              </button>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}

export default ProductsPage;
