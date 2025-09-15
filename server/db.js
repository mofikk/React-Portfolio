const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB connected!");
    return client.db("Portfolio"); // Use your DB name
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

module.exports = connectDB;
