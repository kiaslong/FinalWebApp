
const productService = require('../services/productService'); // Import the product service

// Create a new product
exports.createProduct = async (req, res) => {
    try {
      const {productName, importPrice, retailPrice, category } = req.body;
      const barcode = generateBarcode();
      const result = await productService.createProduct({barcode, productName, importPrice, retailPrice, category });
      res.status(201).redirect('/products');
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.getAllProducts = async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.render('products',{products})
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Retrieve a product by barcode
  exports.getProductByBarcode = async (req, res) => {
    try {
      const { barcode } = req.params;
      const product = await productService.getProductByBarcode(barcode);
      res.status(200).json(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Update a product by barcode
  exports.updateProductByBarcode = async (req, res) => {
    try {
      const { barcode } = req.params;
      const updatedData = req.body;
      const result = await productService.updateProductByBarcode(barcode, updatedData);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Delete a product by barcode
  exports.deleteProductByBarcode = async (req, res) => {
    try {
      const { barcode } = req.params;
      const result = await productService.deleteProductByBarcode(barcode);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  function generateBarcode() {
    // You can use a timestamp or a unique identifier like UUID
    const timestamp = Date.now().toString();
    return timestamp;
  }
  
  // ... other product-related controllers ...
  