import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user
export const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  const q = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(q, [name, email, hashedPassword, role], (err, result) => {
    if (err) return res.status(500).json({ message: "Error registering user." });
    res.json({ message: "User registered!", userId: result.insertId });
  });
};

// Login user
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Error logging in." });
    if (results.length === 0) return res.status(400).json({ message: "Invalid email or password." });

    const user = results[0];

    // Compare password
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password." });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Logged in!", user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
  });
};
