const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    category: String,
    level: String,
    tools: [String]
});

module.exports = mongoose.Schema("Skill", skillSchema);
