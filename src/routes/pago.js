const express = require("express");
const pagoSchema = require("../models/pago");

const router = express.Router();

// create 
router.post("/pagos", (req, res) => {
  try{
    const pago = pagoSchema(req.body);
    pago
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// get 
router.get("/pagos", (req, res) => {
  try{
    pagoSchema
      .find() //encontrar
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

//update
router.put("/pagos/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, codigo} = req.body;
    pagoSchema
      .updateOne({ _id: id}, {$set: {name,codigo} }) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({message:error});
  }
});


//delete 
router.delete("/pagos/:id", (req, res) => {
  try{
    const { id } = req.params;
    pagoSchema
      .remove({ _id: id})
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

module.exports = router;