const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    timeframe: String,
    description: String,
    link: String,
    toolList: [String]
});

module.exports = mongoose.model("Project", projectSchema, "projects");