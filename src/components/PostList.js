// components/PostList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "../App.css"; // Pastikan Anda mengimpor CSS

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk mengontrol loading

  useEffect(() => {
    // Mengambil data posting
    const fetchPosts = async () => {
      setLoading(true); // Set loading menjadi true sebelum memulai fetch
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false); // Set loading menjadi false setelah data diambil
    };

    fetchPosts();
  }, []);

  if (loading) return <Loader />; // Tampilkan Loader jika loading

  return (
    <div className="container">
      {" "}
      {/* Menggunakan kelas container untuk grid */}
      <h1 style={{ width: "100%", textAlign: "center" }}>Daftar Post</h1>
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          style={{ textDecoration: "none" }} // Menghilangkan garis bawah pada link
        >
          <div className="card">
            {" "}
            {/* Menambahkan kelas card */}
            <h2 className="card-title">{post.title}</h2>{" "}
            {/* Menambahkan kelas card-title */}
            <img
              src={`https://picsum.photos/300/200?random=${post.id}`} // Menggunakan ID post untuk mendapatkan gambar acak
              alt={`Gambar untuk ${post.title}`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
