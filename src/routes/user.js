const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
  try{
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// get all users
router.get("/users", (req, res) => {
  try{
    userSchema
      .find() //encontrar
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//get a user
router.get("/users/:id", (req, res) => {
  try{
    const { id } = req.params;
    userSchema
      .findById(id) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//update a user
router.put("/users/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, age, email, password, rol, sucursal} = req.body;
    userSchema
      .updateOne({ _id: id}, {$set: {name,age,email,password,rol,sucursal} }) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//delete a user
router.delete("/users/:id", (req, res) => {
  try{
    const { id } = req.params;
    userSchema
      .remove({ _id: id})
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

module.exports = router;