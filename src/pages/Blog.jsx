import React from "react";
import blogPosts from "../data/blog.json";
import BlogCard from "../components/sections-cards/BlogCard";
import Container from "../components/ui/Container";

function Blog() {
  //  const limit = blogPosts.slice(0, 5)
  return (
    <>
      <Container>
        <div className="px-4">
          <BlogCard items={blogPosts} />
        </div>
      </Container>
    </>
  );
}

export default Blog;
