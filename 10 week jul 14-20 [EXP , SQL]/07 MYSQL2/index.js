const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'userAuthSimple'
});

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password, email, profileInfo } = req.body;
  db.query(
    'INSERT INTO users (username, password, email, profileInfo) VALUES (?, ?, ?, ?)',
    [username, password, email, profileInfo],
    (err) => {
      if (err) return res.status(400).send(err);
      res.status(201).send('User registered successfully');
    }
  );
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0)
        return res.status(404).send('Invalid username or password');
      res.send('User logged in successfully');
    }
  );
});

// Reset Password endpoint
app.post('/reset-password', (req, res) => {
  const { email, newPassword } = req.body;
  db.query(
    'UPDATE users SET password = ? WHERE email = ?',
    [newPassword, email],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.affectedRows === 0)
        return res.status(404).send('User not found');
      res.send('Password reset successfully');
    }
  );
});

// Get Profile endpoint

app.get('/profile', (req, res) => {
  const { username } = req.query;
  db.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0)
        return res.status(404).send('User not found');
      res.send(results[0]);
    }
  );
});


// Update Profile endpoint
app.patch('/profile', (req, res) => {
  const { username, profileInfo } = req.body;
  db.query(
    'UPDATE users SET profileInfo = ? WHERE username = ?',
    [profileInfo, username],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.affectedRows === 0)
        return res.status(404).send('User not found');
      res.send('Profile updated successfully');
    }
  );
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
