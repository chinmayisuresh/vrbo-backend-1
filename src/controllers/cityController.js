const express = require("express")
const City = require("../models/city.model")

const router = express.Router()

//post request

router.post("", async(req, res) => {

    const city = await City.create(req.body)

    return res.status(201).send({city})
})


//get request

router.get("", async(req, res) => {

    const city = await City.find().lean().exec()

    return res.status(200).send({city})
})


module.exports = router