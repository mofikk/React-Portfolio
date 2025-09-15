const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();


app.use(cors());

app.use(express.json());

let db;

// Connect to MongoDB once
connectDB().then(database => {
  db = database;

  // Test route
  app.get("/", (req, res) => {
    res.send("✅ Backend is working!");
  });

  // GET all playground documents
  app.get("/playground", async (req, res) => {
    try {
      const playground = await db.collection("playground").find({}).toArray();
      res.json(playground);
    } catch (err) {
      console.error("❌ Error fetching playground:", err);
      res.status(500).json({ error: "Failed to fetch playground" });
    }
  });

  // GET all webProjects documents
  app.get("/webprojects", async (req, res) => {
    try {
      const projects = await db.collection("webProjects").find({}).toArray();
      res.json(projects);
    } catch (err) {
      console.error("❌ Error fetching projects:", err);
      res.status(500).json({ error: "Failed to fetch web projects" });
    }
  });

  // Start server
 const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

});
