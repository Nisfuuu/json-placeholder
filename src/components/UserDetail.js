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
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>
        Alamat: {user.address.street}, {user.address.city}
      </p>
      <p>Telepon: {user.phone}</p>
      <Link to="/users">Kembali ke Daftar Pengguna</Link>
    </div>
  );
};

export default UserDetail;
