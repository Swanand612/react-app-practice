import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const usersFilePath = path.join(process.cwd(), "data", "users.json");
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));

    const newUser = {
      id: users.length + 1,
      username,
      password,
      role: username.includes("admin") ? "admin" : "user",
      isBlocked: false,
      isDeleted: false,
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: "User created successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
