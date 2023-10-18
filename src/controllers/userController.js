const userService = require('../services/userService'); // Import the user service

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const  email = req.body.email;
    let temp = email.split('@')
    username=temp[0];
    password = username;
    const result = await userService.registerUser({ email, password, username });
    res.status(201).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const result = await userService.loginUser({ username, password });
    return res.redirect('/');
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ... other user-related controllers ...
