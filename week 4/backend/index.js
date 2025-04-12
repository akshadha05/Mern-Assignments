const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// GET /welcome route
app.get('/welcome', (req, res) => {
  res.json({ message: 'Welcome to Express!' });
});

// In-memory array to store users
let users = [];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.status(204).send();
});

// Export the app for testing
module.exports = app;

// Start the server only if this file is run directly
if (require.main === module) {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}