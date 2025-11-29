import db from "../db.js";

export const placeOrder = (req, res) => {
  const { userId, items, total } = req.body;

  const q = "INSERT INTO orders (userId, items, total) VALUES (?, ?, ?)";
  db.query(q, [userId, JSON.stringify(items), total], (err, result) => {
    if (err) return res.status(500).json({ message: "Order failed." });
    res.json({ message: "Order placed!", orderId: result.insertId });
  });
};

export const getOrdersByUser = (req, res) => {
  const { userId } = req.params;

  const q = "SELECT * FROM orders WHERE userId = ?";
  db.query(q, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Failed to fetch orders." });
    res.json(results);
  });
};
