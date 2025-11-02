const mongoose = require("mongoose");

const volunteeringSchmema = new mongoose.Schema({
    org: String,
    year: String,
    positions: [{role: String, date: String}]
});

module.exports = mongoose.model("Volunteeting", volunteeringSchmema);