const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController'); // Import the user controller


router.get('/', (req, res) => {
  return res.render('index'); 
});



module.exports = router;
