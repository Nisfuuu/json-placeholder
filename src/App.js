import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import "./styles/styles.css"; // Mengimpor file CSS global

function App() {
  const videoRef = useRef(null); // Membuat ref untuk video

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Mengatur kecepatan pemutaran video menjadi setengah dari kecepatan normal
    }
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
