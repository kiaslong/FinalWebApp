const { MongoClient } = require("mongodb");
const config = require("../config/config.json"); // Import the configuration

// Read the MongoDB URI from the config file
const uri = config.mongodb_uri;


// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: "1", // Set the Stable API version to v1
    strict: true,
    deprecationErrors: true,
  },
});


async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { client,connectToMongoDB};
