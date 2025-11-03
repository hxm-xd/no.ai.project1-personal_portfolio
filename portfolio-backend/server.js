const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5050;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Project = require("./models/projects");
const Skill = require("./models/skills");
const About = require("./models/about");
const Volunteering = require("./models/volunteering");

app.use(express.static("public"));
app.use(express.json());

const corsOptions = {
  origin: "https://hamoodthariq.netlify.app",
  credentials: true
};

app.use(cors(corsOptions));


if (!process.env.MONGO_URL) {
  console.error("❌ Missing MONGO_URL environment variable");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });


  

app.get("/api/about",async (req,res) =>{
    try{
        const about = await About.findOne();
        res.json(about);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    console.log("Skills fetched:", skills); // see output in server logs
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/projects", async (req, res) =>{
    try{ 
        const projects = await Project.find();
         console.log("projects fetched:", projects)
        res.json(projects);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

app.get("/api/volunteering",async (req, res) => {
    try{
        const volunteering = await Volunteering.find();
        res.json(volunteering);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});


// simple health endpoint for uptime checks
app.get("/healthz", (req, res) => {
  const dbState = mongoose.connection.readyState; // 1: connected
  res.json({ ok: true, port, dbConnected: dbState === 1 });
});


app.listen(port, ()=> {
    console.log(`Application has started on port ${port}`);
});