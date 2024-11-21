// components/PostList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar"; // Impor Navbar

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []); // Pastikan array kosong untuk mencegah infinite loop

  if (loading) return <Loader />;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="relative min-h-screen">
      <Navbar /> {/* Tambahkan Navbar di sini */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/glass2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto p-4 relative z-10 mt-16">
        <h1 className="text-center text-2xl font-bold mb-4 text-white">
          Daftar Post
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPosts.map((post) => (
            <Link
              to={`/posts/${post.id}`}
              key={post.id}
              className="block text-decoration-none"
            >
              <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-gray-800 bg-opacity-70">
                <img
                  src={`https://picsum.photos/300/200?random=${post.id}`}
                  alt={`Gambar untuk ${post.title}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                />
                <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0 text-center text-shadow">
                  {post.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
