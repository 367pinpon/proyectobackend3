const express = require("express");
const ventaSchema = require("../models/venta");

const router = express.Router();

// create user
router.post("/ventas", (req, res) => {
  try{
    const venta = ventaSchema(req.body);
    venta
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// get all users
router.get("/ventas", (req, res) => {
  try{
    ventaSchema
      .find() //encontrar
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//get a user
router.get("/ventas/:id", (req, res) => {
  try{
    const { id } = req.params;
    ventaSchema
      .findById(id) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({ message: error });
  }
});

module.exports = router;