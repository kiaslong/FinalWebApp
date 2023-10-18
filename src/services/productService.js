const { client } = require('../database/mongoDBconnection');
const db = client.db("phoneretail"); // Update with your database name



async function createProduct({ barcode, productName, importPrice, retailPrice, category }) {
  try {
    // Check if the product with the same barcode already exists using Mongoose
    const existingProduct = await db.collection("products").findOne({ barcode });

    if (existingProduct) {
      throw new Error('Product with this barcode already exists.');
    }

    // Create a new product instance using Mongoose
    const newProduct = {
      barcode,
      productName,
      importPrice,
      retailPrice,
      category,
      creationDate: new Date().toDateString(),
    };

    await db.collection("products").insertOne(newProduct);

    return { message: 'Product created successfully.' };
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const productsCursor = await db.collection("products").find({});
    const result = await productsCursor.toArray();
    return result;
  } catch (error) {
    throw error;
  }
}

  
  // Retrieve a product by barcode
  async function getProductByBarcode(barcode) {
    try {
      const product = await db.collection("products").findOne({ barcode });
  
      if (!product) {
        throw new Error('Product not found.');
      }
  
      return product;
    } catch (error) {
      throw error;
    }
  }
  
  // Update a product by barcode
  async function updateProductByBarcode(barcode, updatedData) {
    try {
      const result = await db.collection("products").updateOne({ barcode }, { $set: updatedData });
  
      if (result.modifiedCount === 0) {
        throw new Error('Product not found or update failed.');
      }
  
      return { message: 'Product updated successfully.' };
    } catch (error) {
      throw error;
    }
  }
  
  // Delete a product by barcode
  async function deleteProductByBarcode(barcode) {
    try {
      const result = await db.collection("products").deleteOne({ barcode });
  
      if (result.deletedCount === 0) {
        throw new Error('Product not found or delete failed.');
      }
  
      return { message: 'Product deleted successfully.' };
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = {
    createProduct,
    getProductByBarcode,
    updateProductByBarcode,
    deleteProductByBarcode,
    getAllProducts,
    // other product-related service functions...
  };
  