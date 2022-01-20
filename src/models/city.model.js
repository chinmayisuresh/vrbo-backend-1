const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({

    image_url: {type: String , required: true},
    city_name: {type: String, required: true},
    places: [{type: mongoose.Schema.Types.ObjectId, ref: "place", required: true}]
   
},
{
    versionKey: false,
    timestamps: true


})

const City = mongoose.model("city", citySchema)

module.exports = City