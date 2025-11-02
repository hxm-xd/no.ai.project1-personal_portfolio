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
    timeframe: "Jul 2025 - Present",
    description: `Developing a real-time landslide detection system using IoT,
    robotics, and AI to enhance disaster preparedness in Sri Lanka.
    The system monitors soil moisture, ground vibrations, and
    rainfall, sending instant mobile alerts to residents and
    authorities when risk thresholds are reached. Using AI and machine
    learning to improve predictions, the project aligns with NBRO
    standards to ensure effective deployment. Aims to provide a
    scalable, cost-effective solution to reduce landslide risks.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["ESP32", "Firebase", "Arduino IDE", "Blynk"]
  },
  {
    id: 2,
    title: "Power BI Retail Sales Dashboard",
    timeframe: "May 2025 - Jun 2025",
    description: `Built an interactive dashboard in Power BI analyzing 51,000+ sales
    records across 25 attributes, focusing on sales trends, regional
    performance, product demand, and shipping efficiency. Managed data
    cleaning, transformation, and modeling to ensure accuracy, and
    used clear visual storytelling to present insights for better
    decision-making. This project strengthened my practical BI
    reporting and data analysis skills while delivering accessible,
    actionable business insights.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["PowerBI", "Kaggle"]
  },
  {
    id: 3,
    title: "AI and Academic Autonomy Study",
    timeframe: "May 2025 - Jun 2025",
    description: `Conducted a statistical study exploring whether undergraduates are
    losing independent thinking skills due to frequent AI use. Using
    surveys and applying descriptive, correlation, and regression
    analysis on responses from 30 NIBM undergraduates, we examined the
    relationship between AI usage, productivity, and academic
    confidence. Findings showed AI tools are widely used for coding
    and research, with a moderate trend suggesting frequent AI users
    may feel slightly less confident working independently,
    highlighting the need to balance AI support with critical thinking
    development in education.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["Google Sheets", "Microsoft Excel", "Jamovi", "Firebase"]
  },
  {
    id: 4,
    title: "Vegetable & Fruit E-commerce Web Application",
    timeframe: "Apr 2025 - May 2025",
    description: `Developed a clean, user-friendly e-commerce platform for a vegetable
    and fruit store using HTML, CSS, JavaScript, Java (Spring Boot), and
    MVC architecture. Customers can browse categories, view product
    details, add items to cart, and place orders seamlessly. Focused on
    responsive design and intuitive navigation to enhance the online
    shopping experience, with a structured backend ensuring reliable
    product and order management.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["SpringBoot", "Spring MVC", "Express.js", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    title: "Warehouse Management Robot",
    timeframe: "Jan 2025 - Apr 2025",
    description: `Developed a low-cost warehouse inventory robot using Arduino Mega to
    assist with inventory tracking. Controlled via a custom mobile app,
    it features dual ultrasonic sensors for obstacle detection and an
    MPU9250 IMU for orientation tracking. Built with a modular design
    for future upgrades like SLAM and autonomous navigation, combining
    robotics and IoT concepts for practical warehouse automation.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["Arduino", "TinkerCad", "Processing"]
  },
  {
    id: 6,
    title: "Quick Cart",
    timeframe: "Jul 2024 - Nov 2024",
    description: `Developed QuickCart, an all-in-one mobile app for purchasing goods
    and accessing services like transport, food delivery, and on-demand
    providers. Designed to simplify daily life by unifying diverse needs
    under a single platform. Built using Flutter, Firebase
    Authentication, Firestore, and Firebase Storage as part of the
    Diploma in Software Engineering final project at NIBM.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["FlutterFlow (Flutter)", "Firebase"]
  },
  {
    id: 7,
    title: "EduSync - Academic Management System",
    timeframe: "Jul 2024 - Sep 2024",
    description: `Developed a desktop application to help students manage attendance,
    GPA tracking, budget management, and task scheduling. Built with
    Java Swing, MySQL, and JDBC, implementing user login, CRUD
    operations, and personalized dashboards for effective academic task
    management.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["Java", "Swing", "MySQL", "JDBC"]
  },
  {
    id: 8,
    title: "Smart Garbage Management System",
    timeframe: "Feb 2024 - Apr 2024",
    description: `Developed a low-cost, sensor-based system for real-time waste bin
    fill-level monitoring to optimize urban waste collection.
    Automatically alerts authorities when thresholds are reached,
    reducing overflow and unnecessary trips, with a manual override for
    urgent requests. Designed using TinkerCad circuit simulation and
    logic circuits as part of broader IoT and smart city sustainability
    initiatives.`,
    link: "https://www.linkedin.com/in/hamood-thariq-979409289/details/projects/",
    toolList: ["TinkerCad", "Integrated Controllers"]
  }
];


//Volunteering Data
const volunteering = [
  {
    org: "Rotaract club of Kandy Hill Capital",
    year: "2024 - Present",
    positions: [
      { role: "Director of Professional development", date: "July 2025 - Present" },
      { role: "General Member", date: "June 2024 - June 2025" }
    ]
  },
  {
    org: "STEMUP Foundation - NIBM Kandy",
    year: "2024 - Present",
    positions: [
      { role: "Co Lead", date: "July 2025 - Present" },
      { role: "Volunteer", date: "Feb 2024 - June 2025" }
    ]
  },
  {
    org: "IEEE - NIBM",
    year: "2025 - Present",
    positions: [
      { role: "Member", date: "Oct 2025 - Present" }
    ]
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

app.get("/api/volunteering", (req, res) => {
    res.json(volunteering);
});

app.listen(port, ()=> {
    console.log(`Application has started at http://localhost:${port}`);
});