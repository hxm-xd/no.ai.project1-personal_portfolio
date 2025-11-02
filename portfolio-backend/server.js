const express = require("express");
const cors = require("cors");
const app = express();
const port = 5050;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Project = require("./models/project");
const Skill = require("./models/skills");
const About = require("./models/about");
const Volunteering = require("./models/volunteering");

app.use(express.static("public"));
app.use(express.json());

app.use(cors({
  origin: "https://hamoodthariq.netlify.app", 
  credentials: true
}));


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

  

app.get("/api/about",async (req,res) =>{
    try{
        const about = await About.findOne();
        res.json(about);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

app.get("/api/skills",async (req, res) =>{
    try{
        const skills = await Skill.find();
        res.json(skills);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

app.get("/api/projects", async (req, res) =>{
    try{ 
        const projects = await Project.findOne();
        res.json(projects);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

app.get("/api/volunteering",async (req, res) => {
    try{
        const volunteering = await Volunteering.findOne();
        res.json(volunteering);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});


app.listen(port, ()=> {
    console.log(`Application has started at http://localhost:${port}`);
});