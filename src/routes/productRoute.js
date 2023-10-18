const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Import the product controller
const productService = require('../services/productService'); 
// Create a new product
router.post('/add', productController.createProduct);

router.get('/',productController.getAllProducts)

// Retrieve a product by barcode
router.get('/barcode/:barcode', productController.getProductByBarcode);

// Update a product by barcode
router.put('/barcode/:barcode', productController.updateProductByBarcode);

// Delete a product by barcode
router.delete('/barcode/:barcode', productController.deleteProductByBarcode);

// ... other product-related routes ...

module.exports = router;
