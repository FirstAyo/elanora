import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ items }) {
  return (
    <>
      {/* Grid of blog cards */}
      <div className="grid gap-5 my-10 md:grid-cols-2 lg:grid-cols-4">
        {items.map((post) => {
          const blogLink = post.slug
            ? `/blog/${post.slug}`
            : `/blog/${post.id}`;

          return (
            <article
              key={post.id}
              className="
                group relative flex flex-col h-full
                overflow-hidden rounded-3xl bg-white 
                shadow-md hover:shadow-xl transition-shadow duration-500
              "
            >
              {/* ====================== IMAGE SECTION ====================== */}
              <Link to={blogLink} className="block relative">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      h-64 w-full object-cover 
                      transition-transform duration-700 ease-out 
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* FLOATING CATEGORY TAG */}
                {post.category && (
                  <span
                    className="
                      absolute top-4 left-4 rounded-full bg-white/90 
                      backdrop-blur px-4 py-1 text-xs font-semibold 
                      uppercase tracking-wide shadow
                    "
                  >
                    {post.category}
                  </span>
                )}

                {/* SOFT HOVER OVERLAY */}
                <div
                  className="
                    absolute inset-0 bg-black/20 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 
                    rounded-3xl
                  "
                />
              </Link>

              {/* ====================== CONTENT BOX ====================== */}
              <div
                className="
                  relative -mt-6 mx-4 mb-4
                  rounded-2xl bg-white/80 backdrop-blur-lg 
                  p-5 shadow-md 
                  flex flex-1 flex-col gap-4
                "
              >
                {/* Meta: author + date */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium text-gray-900">
                    {post.author}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gray-400" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <Link to={blogLink}>
                  <h2 className="text-lg font-semibold leading-tight text-gray-900 transition-colors group-hover:text-black/80">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt (clamped so height stays sane) */}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Bottom row: pinned using mt-auto so all cards align */}
                <div className="mt-auto pt-3 flex items-center justify-between text-sm">
                  <Link
                    to={blogLink}
                    className="
                      inline-flex items-center gap-2 font-semibold 
                      text-gray-900 hover:gap-3 transition-all duration-300
                    "
                  >
                    Read Article
                    <span className="text-lg -mt-[1px]">→</span>
                  </Link>

                  {post.category && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-600">
                      {post.category}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default BlogCard;
