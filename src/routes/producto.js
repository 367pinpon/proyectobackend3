const express = require("express");
const productoSchema = require("../models/producto");

const router = express.Router();

// create 
router.post("/productos", (req, res) => {
  try{
    const producto = productoSchema(req.body);
    producto
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// get all productos
router.get("/productos", (req, res) => {
  try{
    productoSchema
      .find() //encontrar
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//get 
router.get("/productos/:id", (req, res) => {
  try{
    const { id } = req.params;
    productoSchema
    .findById(id) //encontrar por id
    .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//update a user
router.put("/productos/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, sku, stock, sucursal, precio, status} = req.body;
    productoSchema
      .updateOne({ _id: id}, {$set: {name, sku, stock, sucursal, precio, status} }) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//delete a user
router.delete("/productos/:id", (req, res) => {
  try{
    const { id } = req.params;
    productoSchema
      .remove({ _id: id})
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

module.exports = router;