const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const mongoDBConnection = require('./src/database/mongoDBconnection');
const userRoutes = require('./src/routes/userRoute');


// Connect to MongoDB and start the server
async function startServer() {
  try {
     // Establish MongoDB connection
     await mongoDBConnection.connectToMongoDB();
    // Middleware to parse JSON request bodies
    app.use(express.json());
    app.engine('pug', require('pug').__express)
    app.set('view engine', 'pug');
    app.set('views', __dirname +'/src/public/views/');
   

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/users', userRoutes);
   

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();
