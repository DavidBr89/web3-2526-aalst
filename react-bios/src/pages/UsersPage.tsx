import React, { useEffect, useState } from "react";
import Axios from "axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

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
      {users.map((u) => (
        <p className="text-4xl font-bold" key={u.id}>
          {u.email}
        </p>
      ))}
    </div>
  );
};

export default UsersPage;
