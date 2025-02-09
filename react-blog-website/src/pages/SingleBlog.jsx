import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();

  // Check if data is defined and has at least one item
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No blog data available.</p>;
  }

  // Destructure with default values
  const {
    title = "Untitled",
    image = "",
    category = "Unknown",
    author = "Unknown Author",
    published_date = "Unknown Date",
    reading_time = "Unknown",
    content = "No content available.",
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-yellow-300 text-gray-700">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
          Single Blog Page
        </h1>
      </div>
      {/* Blog detail */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <img src={image} alt={title} className="w-full mx-auto rounded" />
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>

          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              iure quisquam corporis sit consequatur eius veniam repellendus
              harum nemo molestias consectetur, ipsum repellat eaque earum
              blanditiis facere voluptatum alias voluptas facilis dolorem,
              excepturi magni ratione doloremque. Assumenda doloribus laudantium
              optio necessitatibus asperiores, illo fuga magnam velit animi
              saepe odit aspernatur!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              iure quisquam corporis sit consequatur eius veniam repellendus
              harum nemo molestias consectetur, ipsum repellat eaque earum
              blanditiis
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              iure quisquam corporis sit consequatur eius veniam repellendus
              harum nemo molestias consectetur, ipsum repellat eaque earum
              blanditiis facere voluptatum alias voluptas facilis dolorem,
              excepturi magni ratione doloremque. Assumenda doloribus laudantium
              optio necessitatibus asperiores, illo fuga magnam velit animi
              saepe odit aspernatur!
            </p>
            <br />
          </div>
        </div>
        <div className="lg:w-1/4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
