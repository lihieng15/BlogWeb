import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";

//reacticons
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contacts" },
  ];

  //modal details
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-green-400 text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white ">
          Blog
          <span className="text-yellow-300">School</span>
        </a>

        {/*navitems for lg device */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*menu icons*/}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className=" hover:text-yellow-400">
            <FaFacebook />
          </a>
          <a href="/" className=" hover:text-yellow-400">
            <FaDribbble />
          </a>
          <a href="/" className=" hover:text-yellow-400">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg bg-yellow-500 px-6 py-2 rounded hover:bg-white  hover:text-green-500 duration-200 ease-in "
          >
            Login
          </button>
        </div>
        {/* our modal component*/}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        {/* mobile menu btn, display on mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenuOpen} className="cursor-pointer">
            {isMenuOpen ? <FaXmark /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* menu items only for mobile*/}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out  duration-150"
              : "hidden"
          } `}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
