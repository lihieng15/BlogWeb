import React from "react";
import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-yellow-300 text-gray-700">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
          Blog Page
        </h1>
      </div>
      <div>
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
