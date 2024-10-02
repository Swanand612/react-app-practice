import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const usersFilePath = path.join(process.cwd(), "data", "users.json");
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
