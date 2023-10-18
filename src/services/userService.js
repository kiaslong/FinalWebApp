const User = require('../models/users');
const bcrypt = require('bcrypt');
const { client } = require('../database/mongoDBconnection');
const db = client.db("users");
// Register a new user
async function registerUser({ email, password, fullName }) {
  try {
    // Check if the user with the same email already exists
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashedPassword,
      fullName,
    };

    // Save the user to the "users" collection
    await db.collection("users").insertOne(newUser);

    return { message: 'User registered successfully.' };
  } catch (error) {
    throw error;
  }
}

// Login user
async function loginUser({ email, password }) {
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Authentication failed.');
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Authentication failed.');
    }

    // You can generate and return a JWT token here for authentication

    return { message: 'Login successful.' };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  registerUser,
  loginUser,
  // other user-related service functions...
};
