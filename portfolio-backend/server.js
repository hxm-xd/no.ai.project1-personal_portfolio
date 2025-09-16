const express = require("express");
const cors = require("cors");
const app = express();

const port = 5050;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());


//About data
const aboutData = 
    {
        
        description: `I am a passionate
            <b>Computing (Software Engineering pathway)</b> undergraduate at the
            National Institute of Business Management, focused on using
            technology to solve real-world problems and drive innovation. My
            interests include
            <b
              >Software development, Mobile apps, IoT, Robotics, and Enterprise
              Applications</b
            >. I thrive on challenges and see each project as an opportunity for
            growth. With strong problem-solving and teamwork skills, I aim to
            leverage technology to create meaningful change in the IT industry.
            I'm eager to collaborate and contribute to impactful projects.`,
        image: "/public/images/Me.jpg"
    
};

//Skills data
const skillsData = [
  {
    category: "Front-end development",
    level: 70, // percentage for skill bar
    tools: ["HTML", "CSS", "JavaScript", "React", "Java Swing", "Tailwind CSS", "FlutterFlow"]
  },
  {
    category: "Back-end development",
    level: 80,
    tools: ["Spring Boot", "Node.js & Express.js", "Spring Boot(Java)", "Oracle Databases", ".NET", "Firebase", "CRUD APIs"]
  },
  {
    category: "Embedded Systems and IoT",
    level: 90,
    tools: ["Arduino", "ESP", "PCB & Circuit Design", "Blynk"]
  }
];

//Projects data
const projects = [
    { 
        id: 1,
        title: "Landslide Detection and Monitoring System",
        timeframe: "July 2025 - present",
        description: `Developing a real-time landslide detection system using IoT,
              robotics, and AI to enhance disaster preparedness in Sri Lanka.
              The system monitors soil moisture, ground vibrations, and
              rainfall, sending instant mobile alerts to residents and
              authorities when risk thresholds are reached. Using AI and machine
              learning to improve predictions, the project aligns with NBRO
              standards to ensure effective deployment. Aims to provide a
              scalable, cost-effective solution to reduce landslide risks.`,
        link: "https://hamood-portfolio.com",
        toolList: ["ESP32", "Firebase", "Arduino IDE", "Blynk"]
    }
    ,
    { 
        id: 2,
        title: "Landslide Detection and Monitoring System",
        timeframe: "July 2025 - present",
        description: `Developing a real-time landslide detection system using IoT,
              robotics, and AI to enhance disaster preparedness in Sri Lanka.
              The system monitors soil moisture, ground vibrations, and
              rainfall, sending instant mobile alerts to residents and
              authorities when risk thresholds are reached. Using AI and machine
              learning to improve predictions, the project aligns with NBRO
              standards to ensure effective deployment. Aims to provide a
              scalable, cost-effective solution to reduce landslide risks.`,
        link: "https://hamood-portfolio.com",
        toolList: ["ESP32", "Firebase", "Arduino IDE", "Blynk"]
    }
];

app.get("/api/about", (req,res) =>{
    res.json(aboutData);
});

app.get("/api/skills", (req, res) =>{
    res.json(skillsData);
});

app.get("/api/projects",(req, res) =>{
    res.json(projects);
});

app.listen(port, ()=> {
    console.log(`Application has started at https://localhost:${port}`);
});