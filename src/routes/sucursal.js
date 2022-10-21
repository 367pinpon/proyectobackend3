const express = require("express");
const sucursalSchema = require("../models/sucursal");

const router = express.Router();

// create user
router.post("/sucursales", (req, res) => {
  try{
    const sucursal = sucursalSchema(req.body);
    sucursal
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

// get all users
router.get("/sucursales", (req, res) => {
  try{
    sucursalSchema
      .find() //encontrar
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

//update a user
router.put("/sucursales/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, codigo, tlf, adress, adresspace, status} = req.body;
    sucursalSchema
      .updateOne({ _id: id}, {$set: {name, codigo, tlf, adress, adresspace, status} }) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});



module.exports = router;