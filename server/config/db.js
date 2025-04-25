const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    // Create a MongoDB memory server for testing/development
    const mongod = await MongoMemoryServer.create();
    const mongoUri = mongod.getUri();

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log(`MongoDB Memory Server Connected: ${conn.connection.host}`);
    console.log(`MongoDB URI: ${mongoUri}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 