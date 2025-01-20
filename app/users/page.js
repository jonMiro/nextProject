"use client";

import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/users.json");
      const data = await res.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="users-container">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersPage;
