import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

/**
 * CollectionsPage
 *
 * Props:
 *  - collections: Array of objects
 *      {
 *        id: number | string,
 *        name: string,
 *        image: string,        // URL/path to image
 *        url?: string          // optional link path (defaults to "#")
 *      }
 *  - heroImage?: string       // optional background image for the top banner
 */
function CollectionsPage({
  collections = [],
  heroImage = "/images/summer.jpg", // change to any banner image you have
}) {
  // --- simple pagination state ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 3 cards per row / per page like your screenshot

  const totalPages = Math.max(1, Math.ceil(collections.length / itemsPerPage));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (safePage - 1) * itemsPerPage;
  const pageItems = collections.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // optional: scroll to top of card section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO / BREADCRUMB SECTION */}
      <section className="relative h-40 sm:h-48 md:h-56 lg:h-64">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Collections banner"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Text content */}
        <div className="relative h-full flex items-center">
          <Container>
            <div className="text-center text-white space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Collections
              </h1>
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-200">
                  <li>
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-1">
                    /
                  </li>
                  <li className="font-semibold">Collections</li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main>
        <Container>
          {/* Cards grid */}
          <section className="my-12 px-4">
            {pageItems.length === 0 ? (
              <p className="text-center text-gray-500">
                No collections to display.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:gap-8 md:grid-cols-3">
                {pageItems.map((item) => (
                  <article
                    key={item.id}
                    className="relative overflow-hidden bg-gray-50"
                  >
                    <Link to={item.url || "#"} className="block">
                      {/* Image wrapper to keep consistent size */}
                      <div className="aspect-4/5 md:aspect-4/4 w-full">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                      {/* Category label – centered near bottom like in your screenshot */}
                      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
                        <span className="pointer-events-auto inline-block bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-mdrounded-sm max-w-[120px] sm:max-w-none truncate text-center">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <section className="mb-12 border-t border-gray-200 pt-8">
              <nav
                className="flex items-center justify-center gap-4 text-sm"
                aria-label="Collections pagination"
              >
                {/* Previous */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage === 1}
                  className={`px-3 py-1 rounded-full border ${
                    safePage === 1
                      ? "cursor-not-allowed border-gray-200 text-gray-300"
                      : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-black"
                  }`}
                >
                  Prev
                </button>

                {/* Page numbers – simple version like 1 2 3 ... 13 */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;

                    // Optional: compact the middle pages if there are many
                    if (
                      totalPages > 7 &&
                      page !== 1 &&
                      page !== totalPages &&
                      Math.abs(page - safePage) > 1
                    ) {
                      // show ellipsis where appropriate
                      if (page === 2 || page === totalPages - 1) {
                        return (
                          <span key={page} className="px-2 text-gray-400">
                            …
                          </span>
                        );
                      }
                      return null;
                    }

                    const isActive = page === safePage;
                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`h-8 w-8 rounded-full text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-black"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage === totalPages}
                  className={`px-3 py-1 rounded-full border ${
                    safePage === totalPages
                      ? "cursor-not-allowed border-gray-200 text-gray-300"
                      : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-black"
                  }`}
                >
                  Next
                </button>
              </nav>
            </section>
          )}
        </Container>
      </main>
    </>
  );
}

export default CollectionsPage;
