const express = require("express")

const Place = require("../models/place.model")

const router = express.Router()

//post request

router.post("", async(req, res) => {

    const place = await Place.create(req.body)

    return res.status(201).send({place})
})

//get request

router.get("", async(req, res) => {

    const place = await Place.find().lean().exec()

    return res.status(200).send({place})
})

//patch request

router.get("/place/:id", async(req, res) => {

    const place = await Place.findByIdAndUpdate(req.params.id, req.body, {new : true})

    return res.status(200).send({place})
})


module.exports = router


