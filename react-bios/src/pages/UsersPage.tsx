import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useAuth } from "../contexts/AuthContext";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await Axios.get<User[]>("http://localhost:5001/users", {
        withCredentials: true,
      });
      setUsers(response.data);
    })();
  }, []);

  return (
    <div>
      <div className="border-2  p-4 ">
        <button
          onClick={() => {
            logout();
          }}
          className="px-4 py-2 bg-teal-600 text-white text-center">
          Uitloggen
        </button>
      </div>

      {users.map((u) => (
        <p className="text-4xl font-bold" key={u.id}>
          {u.email}
        </p>
      ))}
    </div>
  );
};

export default UsersPage;
