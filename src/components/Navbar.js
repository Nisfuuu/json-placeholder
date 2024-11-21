// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Post List
        </Link>
        <div>
          <Link to="/users" className="mx-2">
            User List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
