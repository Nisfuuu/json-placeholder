import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [id]);

  if (!post) return <div>{<Loader />}</div>;

  return (
    <div className="relative min-h-screen">
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
        <div className="bg-gray-800 bg-opacity-70 rounded-xl p-6 drop-shadow-xl mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-white mb-4">{post.body}</p>
          <Link
            to="/"
            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Kembali ke Daftar Postingan
          </Link>
        </div>

        <div className="bg-gray-800 bg-opacity-70 rounded-xl p-6 drop-shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Komentar</h2>
          <ul className="text-white">
            {comments.map((comment) => (
              <li key={comment.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <strong className="text-yellow-400">{comment.name}</strong>
                <p className="text-white mt-1">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
