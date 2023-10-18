const userService = require('../services/userService'); // Import the user service

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
 
    const result = await userService.registerUser({ email, password, fullName });
    res.status(201).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser({ email, password });
    res.status(200).json(result);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
//profileUser
exports.profileUser = async (req, res) => {
  try { 
    const result = await userService.profileUser({ email, password, fullName });
    res.status(201).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// ... other user-related controllers ...
