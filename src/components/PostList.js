import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const App = () => {
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
    <div>
      <h1>Daftar Post</h1>
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          style={{ marginBottom: "20px", display: "block" }} // Menambahkan display block agar link lebih mudah diklik
        >
          <h2>{post.title}</h2>
          <img
            src={`https://picsum.photos/300/200?random=${post.id}`} // Menggunakan ID post untuk mendapatkan gambar acak
            alt={`Gambar untuk ${post.title}`}
            style={{ width: "300px", height: "200px" }}
          />
        </Link>
      ))}
    </div>
  );
};

export default App;
