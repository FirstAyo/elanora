import React from "react";
import Container from "../ui/Container";
import BlogCard from "../sections-cards/BlogCard";
import blogPosts from "../../data/blog.json";

function BlogSection() {
  const limit = blogPosts.slice(0, 4);

  return (
    <>
      <Container>
        <div>
          <div className="flex justify-center items-center gap-5 lg:gap-10">
            <div className="w-16 bg-black h-0.5"></div>
            <h1 className="text-xl lg:text-3xl font-bold uppercase">Latest from blog</h1>
            <div className="w-16 bg-black h-0.5"></div>
          </div>
          <p className="text-center text-gray-500">Top view in this week</p>
        </div>
        <BlogCard items={limit} />
      </Container>
    </>
  );
}

export default BlogSection;
