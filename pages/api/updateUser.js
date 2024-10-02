import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { id, isBlocked, isDeleted } = req.body;
    const usersFilePath = path.join(process.cwd(), "data", "users.json");
    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], isBlocked, isDeleted };
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
