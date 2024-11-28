// components/UserList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar"; // Impor Navbar

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []); // Pastikan array kosong untuk mencegah infinite loop

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/glass2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto p-4 md:p-20 relative z-10 mt-16">
        <h1 className="text-center text-2xl font-bold mb-4 text-white">
          Daftar Pengguna
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <Link
              to={`/users/${user.id}`}
              key={user.id}
              className="block text-decoration-none transform transition-transform duration-300 hover:scale-105" // Efek hover untuk membesar kartu
            >
              <div className="relative drop-shadow-xl w-full h-64 overflow-hidden rounded-xl bg-gray-800 bg-opacity-70">
                <img
                  src="/user.png" // Gambar pengguna
                  alt={user.name}
                  className="absolute inset-0 w-full h-full object-cover" // Gaya gambar tanpa efek hover
                />
                <div className="absolute flex items-center justify-center z-[1] rounded-xl inset-0 text-center">
                  <span className="text-2xl font-bold text-black">
                    {user.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
