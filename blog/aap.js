const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Replace this with your database or user authentication logic
const users = [
  { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1', role: 'user' },
  { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2', role: 'admin' },
];

// Routes

// GET route for the login page
app.get('/user/login', (req, res) => {
  res.render('login');
});

// POST route for handling login form submission
app.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Set cookies for role and id
    res.cookie('role', user.role);
    res.cookie('id', user.id);
    res.send(`Welcome User ${user.username}`);
  } else {
    res.send('Invalid Credentials');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
