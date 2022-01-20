const mongoose = require("mongoose")


const placeSchema = new mongoose.Schema({


    heading1: {type:String, required: true},
    image1_url: {type: String , required: true},
    image2_url: {type: String , required: true},
    image3_url: {type: String , required: true},
    image4_url: {type: String , required: true},
    heading2: {type: String, required: true},

    cabin_heading: {type: String, required: true},
    area: {type: String, required: true},

    bedroom_heading: {type: String, required: true},
    no_of_beds: {type: String, required: true},

    bathroom_heading: {type:String, required: true},
    no_of_bathrooms: {type: String, required: true},

    spaces_heading: {type: String, required: true},
    spaces:{type: String, required: true},

    heading_description: {type: String, required: true},
    description: {type: String, required: true},

    price: {type: Number, required: true},
    ratings: {type: Number, required: true},

    //amenities

    tv: {type: String, required: true},
    internet: {type: String, required: true},
    satellite: {type: String, required: true},
    heater: {type: String, required: true},
    hottub: {type: String, required: true},
    shower: {type: String, required: true},


    no_of_reviews: {type: String, required: true},
    review1_name: {type: String, required: true},
    review1: {type: String, required: true},

    review2_name: {type: String, required: true},
    review2: {type: String, required: true},

    review3_name: {type: String, required: true},
    review3: {type: String, required: true},


},
{
    versionKey: false,
    timestamps: true


})

const Place = mongoose.model("place", placeSchema)

module.exports = Place

