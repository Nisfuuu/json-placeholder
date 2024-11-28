import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-40 text-white z-50 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/alien.png" alt="Satelit_4553" className="h-8 mr-2" />
          <Link to="/" className="text-lg font-bold">
            Satelit_4553
          </Link>
        </div>
        <div>
          <Link
            to="/users"
            className="mx-2 text-white hover:text-gray-300 transition duration-200"
          >
            User List
          </Link>
          <Link
            to="/"
            className="mx-2 text-white hover:text-gray-300 transition duration-200"
          >
            Post List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
