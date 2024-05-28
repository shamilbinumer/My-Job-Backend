const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: { type: String },
    age: { type: String }
});

module.exports = mongoose.model("companies", companySchema); 
