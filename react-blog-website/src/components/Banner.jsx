import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="px-4 py-32 bg-yellow-200 mx-auto">
      <div className="text-black text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to our blog
        </h1>
        <p className="text-gray-700 lg:w3/5 mx-auto  mb-5 font-primary">
          Start your blog today and join a comunity of wrties and readers who
          are passionate about sharing their stories and ideas. We offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
        <div>
          <Link to="/" className="font-medium hover:text-green-500 inline-flex">
            Leare More
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
