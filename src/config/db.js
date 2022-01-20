const mongoose = require("mongoose")

const connect = () => {

    return mongoose.connect("mongodb+srv://vrbo-clone:vrbo-clone@cluster0.bo2rn.mongodb.net/vrbo")
}

module.exports = connect;
//mongodb+srv://vrbo-clone:<password>@cluster0.bo2rn.mongodb.net/test