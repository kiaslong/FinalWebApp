const express = require('express');
const router = express.Router();
const userController = require('../controllers/indexController'); // Import the user controller


router.get('/', (req, res) => {
  return res.render('index'); 
});



module.exports = router;
