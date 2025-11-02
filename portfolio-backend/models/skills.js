const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    category: String,
    level: Number,
    tools: [String]
});

module.exports = mongoose.model("Skill", skillSchema, "skills"); // third param = collection name

