const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller

// Register a new user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);
// Profile user
router.post('/profile', userController.profileUser);

router.get('/profile', (req, res) => {
 
  return res.render('profile'); 
});

router.get('/register', (req, res) => {
 
  return res.render('register'); 
});

router.get('/login', (req, res) => {
 
  return res.render('login'); 
});

module.exports = router;
