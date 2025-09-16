const express = require("express");
const cors = require("cors");
const app = express();
const port = 5050;

app.use(express.json());
app.use(cors());


//Mock data
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
];



app.get("/api/projects",(req, res) =>{
    res.json(projects);
})

app.listen(port, ()=> {
    console.log(`Application has started at https://localhost:${port}`);
});