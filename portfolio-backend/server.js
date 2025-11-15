const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const PORT = process.env.PORT || 5050;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Project = require("./models/projects");
const Skill = require("./models/skills");
const About = require("./models/about");
const Volunteering = require("./models/volunteering");

// Removed static serve of non-existent local 'public' directory (frontend hosted separately)
app.use(express.json());
app.use(helmet());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api', apiLimiter);

const allowedOrigins = [
  "https://hamoodthariq.vercel.app",
  "http://localhost:5173",
  "http://127.0.0.1:5173"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, origin);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));


if(!process.env.MONGO_URL){
  console.error("❌ MONGO_URL not set in environment.");
} else {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
}


  

app.get("/api/about", async (req,res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      return res.json({
        description: "About information not yet added.",
        image: ""
      });
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

app.get("/api/health", (req,res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

// 404 handler
app.use((req,res,next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ message: 'Not Found' });
  }
  next();
});

// Error handler
app.use((err,req,res,next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});


app.listen(PORT, ()=> {
    console.log(`Application started on port ${PORT}`);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});