const mongoose = require("mongoose");

const volunteeringSchema = new mongoose.Schema({
    org: String,
    year: String,
    positions: [{ role: String, date: String }]
});

module.exports = mongoose.model("Volunteering", volunteeringSchema, "volunteering");