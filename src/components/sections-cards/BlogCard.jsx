import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ items }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 my-10">
        {items.map((blogPost) => (
          <div key={blogPost.id} className="flex flex-col justify-between">
            <Link>
              {" "}
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="h-64 w-full object-cover"
              />
            </Link>
            <div className="my-5 flex flex-col gap-3">
              <Link>
                <h2 className="text-lg font-semibold">{blogPost.title}</h2>
              </Link>
              <div className="text-gray-500 cursor-default">
                <p>
                  By{" "}
                  <span className="font-semibold text-black">
                    {blogPost.author}{" "}
                  </span>
                  on{" "}
                  <span className="font-semibold text-black">
                    {blogPost.date}
                  </span>
                </p>
              </div>
              <p className="text-gray-500 cursor-default">{blogPost.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <Link to="/blog" className="border rounded-full px-8 py-2">
          Visit Blog
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
