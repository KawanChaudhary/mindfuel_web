const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({

    name: String,
    photo: {
        data: Buffer,
        contentType: String
    }


}, { timestamps: true })

module.exports = mongoose.model('Image', imageSchema);