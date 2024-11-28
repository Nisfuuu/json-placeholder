import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div>{<Loader />}</div>;

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/glass2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto p-4 md:p-20 relative z-10 flex justify-center">
        <div className="bg-gray-800 bg-opacity-70 rounded-xl p-6 drop-shadow-xl max-w-lg w-full">
          <div className="flex items-center mb-4">
            <img
              src="/user.png" // Gambar pengguna, ganti dengan gambar yang sesuai
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-white mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-white">Email: {user.email}</p>
              <p className="text-white">
                Alamat: {user.address.street}, {user.address.city}
              </p>
              <p className="text-white">Telepon: {user.phone}</p>
            </div>
          </div>
          <Link
            to="/users"
            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Kembali ke Daftar Pengguna
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
