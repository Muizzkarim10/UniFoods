import db from "../db.js";

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const q = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(q, [name, email, password], (err, result) => {
    if (err)
      return res.status(500).json({ message: "Error registering user." });
    res.json({ message: "User registered!", userId: result.insertId });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const q = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(q, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Error logging in." });

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    res.json({ message: "Logged in!", user: results[0] });
  });
};
