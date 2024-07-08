const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = []; // Dummy users array for example

app.use(bodyParser.json());
app.use(cors());

app.post('/users/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful!', user });
  } else {
    res.status(400).json({ message: 'Invalid user details' });
  }
});

app.post('/users/create', (req, res) => {
  const { email, password } = req.body;
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  users.push({ email, password });
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
