const express = require("express");
const cors = require("cors");
const app = express();
const port = 5050;

app.use(express.json());
app.use(cors());

const projects = [
  { id: 1, title: "Landslide Detection and Monitoring System", description: "My frontend portfolio", link: "https://hamood-portfolio.com"},
  { id: 2, title: "Smart City Project", description: "Miniature Kandy project", link: "https://hamood-portfolio.com"}
];

app.get("/api/projects",(req, res) =>{
    res.json(projects);
})

app.listen(port, ()=> {
    console.log(`Application has started at https://localhost:${port}`);
});