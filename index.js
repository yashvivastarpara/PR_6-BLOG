const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./blog/config/db');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const users = [];
app.get('/user/signup', (req, res) => {
  res.render('signup');
});

app.post('/user/signup', (req, res) => {
  const { username, email } = req.body;

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    res.send(username);
  } else {
    users.push({ username, email });
    res.send(`Account created successfully ${username}`);
  }
});

app.get('/user/login', (req, res) => {
    res.render('login');
  });
  app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
  
    if (isUserAuthenticated(email, password)) {
      const username = getUserUsername(email);
      const role = getUserRole(email);
      const userId = getUserId(email);
  
      res.cookie('userRole', role);
      res.cookie('userId', userId);
      res.send(`Welcome User ${username}`);
    } else {
      res.send('Authentication failed. Please check your email and password.');
    }
});
  
//   function isUserAuthenticated(email, password) {
//   }
  
//   function getUserUsername(email) {
//   }
  
//   function getUserRole(email) {
//   }
  
//   function getUserId(email) {
//   }
  

  
app.listen(8090,()=>{
    console.log("listening on port 8090");
    connect();
})