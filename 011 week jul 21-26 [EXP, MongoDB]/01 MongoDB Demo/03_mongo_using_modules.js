
/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// 👇 'users2' is the actual collection name in MongoDB
const User = mongoose.model('User', userSchema, 'users2');

const newUser = new User({ name: "Kushal", email: "kushal@example.com" });
newUser.save();
*/

// by using model created a users2 colelction in test

const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");

  // 2. Define schema
  const userSchema = new mongoose.Schema({
    name: String,
    email: String
  });

  // 3. Create model using 'users2' collection
  const User = mongoose.model('User', userSchema, 'users2');

  // 4. Create and save a new user
  const newUser = new User({ name: "Kushal", email: "kushal@example.com" });
  return newUser.save();
})
.then(() => {
  console.log("✅ User saved successfully");
  mongoose.disconnect(); // optional: close connection after operation
})
.catch(err => {
  console.error("❌ Error:", err);
});
