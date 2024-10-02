import { useEffect, useState } from "react";
import users from "../data/users.json";
import { Button, Typography } from "@mui/material";

export default function Users() {
  const [userList, setUserList] = useState([]);
  const [, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUserList(data);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUserList(JSON.parse(storedUsers));
    } else {
      setUserList(users);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  const handleToggleBlock = async (userId) => {
    const userToUpdate = users.find((user) => user.id === userId);
    const updatedUser = { ...userToUpdate, isBlocked: !userToUpdate.isBlocked };

    const response = await fetch("/api/updateUser", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      setUsers(users.map((user) => (user.id === userId ? updatedUser : user)));
    }
  };
  const handleToggleDelete = async (userId) => {
    const userToUpdate = users.find((user) => user.id === userId);
    const updatedUser = { ...userToUpdate, isDeleted: !userToUpdate.isDeleted };

    const response = await fetch("/api/updateUser", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      setUsers(users.map((user) => (user.id === userId ? updatedUser : user)));
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <Typography
                  variant="body1"
                  color={
                    user.isDeleted
                      ? "error"
                      : user.isBlocked
                      ? "textDisabled"
                      : "success"
                  }
                >
                  {user.isDeleted
                    ? "Deleted"
                    : user.isBlocked
                    ? "Blocked"
                    : "Active"}
                </Typography>
              </td>
              <td>
                <Button
                  style={{ marginRight: "1rem" }}
                  onClick={() => handleToggleBlock(user.id)}
                  variant="contained"
                  color="primary"
                >
                  {user.isBlocked ? "Unblock" : "Block"}
                </Button>

                <Button
                  onClick={() => handleToggleDelete(user.id)}
                  variant="contained"
                  color="error"
                >
                  {user.isDeleted ? "Restore" : "Delete"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
