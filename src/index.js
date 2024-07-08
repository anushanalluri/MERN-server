const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let users = []; // In-memory array to store users

// Register endpoint
app.post('/users/create', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ name, email, password });
  return res.status(201).json({ message: 'User created successfully' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
