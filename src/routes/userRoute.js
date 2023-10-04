const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller

// Register a new user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

router.get('/register', (req, res) => {
 
  return res.render('register'); 
});

module.exports = router;
