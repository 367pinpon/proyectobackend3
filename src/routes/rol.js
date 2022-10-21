const express = require("express");
const rolSchema = require("../models/rol");

const router = express.Router();

//create rol
router.post("/roles", (req,res) => {
    try{
    const rol = rolSchema(req.body);
    rol
        .save()
        .then((data) => res.json(data))
    }catch(error){
        res.json({message: error});
    }
});


//get all rol
router.get("/roles", (req, res) => {
    try{
    rolSchema
        .find()
        .then((data) => res.json(data))
    }catch(error){
        res.json({message: error});
    }
});


module.exports = router;