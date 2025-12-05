import React from "react";
import blogPosts from "../data/blog.json";
import BlogCard from "../components/sections-cards/BlogCard";

function Blog() {
  //  const limit = blogPosts.slice(0, 5)
  return (
    <div>
      <h1>Blog Page</h1>

      <BlogCard items={blogPosts} />
    </div>
  );
}

export default Blog;
