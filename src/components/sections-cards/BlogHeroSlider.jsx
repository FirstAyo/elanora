import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogHeroSlider({ items = [], intervalMs = 6000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slider every few seconds
  useEffect(() => {
    if (!items.length) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  if (!items.length) return null;

  // For desktop: which 4 posts are currently visible
  const visiblePosts = [0, 1, 2, 3].map((offset) => {
    const idx = (currentIndex + offset) % items.length;
    return items[idx];
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <>
      {/* ========= MOBILE SLIDER (1 card, sliding) ========= */}
      <section className="relative mb-8 lg:hidden">
        <div className="overflow-hidden shadow-lg">
          {/* Track: translateX based on currentIndex */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((post) => {
              const blogLink = post.slug
                ? `/blog/${post.slug}`
                : `/blog/${post.id}`;

              return (
                <article
                  key={post.id}
                  className="group relative h-[260px] sm:h-[320px] min-w-full overflow-hidden"
                >
                  {/* Background image */}
                  <Link to={blogLink} className="block h-full w-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  {/* Dark gradient overlay at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                  {/* Content bar at bottom */}
                  <div className="absolute inset-x-0 bottom-0 px-6 py-5 text-white bg-black/30">
                    <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-gray-200/90">
                      By{" "}
                      <span className="font-semibold">
                        {post.author || "Admin"}
                      </span>
                      {post.category && (
                        <>
                          {" "}
                          in{" "}
                          <span className="font-normal">{post.category}</span>
                        </>
                      )}
                    </p>

                    <Link to={blogLink}>
                      <h2 className="mb-1 text-base font-semibold tracking-wide uppercase group-hover:underline">
                        {post.title}
                      </h2>
                    </Link>

                    {post.date && (
                      <p className="mt-1 text-xs text-gray-300">{post.date}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Arrows (mobile) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous articles"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow hover:bg-white"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next articles"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow hover:bg-white"
        >
          ›
        </button>
      </section>

      {/* ========= DESKTOP STRIP (4 cards) ========= */}
      <section className="relative mb-8 hidden lg:block">
        <div className="grid gap-0 overflow-hidden shadow-lg lg:grid-cols-4">
          {visiblePosts.map((post) => {
            const blogLink = post.slug
              ? `/blog/${post.slug}`
              : `/blog/${post.id}`;

            return (
              <article
                key={post.id}
                className="group relative h-[320px] lg:h-[360px] overflow-hidden"
              >
                <Link to={blogLink} className="block h-full w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-6 py-5 text-white bg-black/30">
                  <p className="mb-1 text-xs uppercase tracking-[0.16em] text-gray-200/90">
                    By{" "}
                    <span className="font-semibold">
                      {post.author || "Admin"}
                    </span>
                    {post.category && (
                      <>
                        {" "}
                        in <span className="font-normal">{post.category}</span>
                      </>
                    )}
                  </p>

                  <Link to={blogLink}>
                    <h2 className="mb-1 text-sm lg:text-base font-semibold tracking-wide uppercase group-hover:underline">
                      {post.title}
                    </h2>
                  </Link>

                  {post.date && (
                    <p className="mt-1 text-xs text-gray-300">{post.date}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Arrows (desktop) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous articles"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow hover:bg-white"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next articles"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow hover:bg-white"
        >
          ›
        </button>
      </section>
    </>
  );
}

export default BlogHeroSlider;
