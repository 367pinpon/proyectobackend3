const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  rol: {
    type: String,
    required: true
  },
  sucursal: {
    type: Number,
    required: true
  }

});

module.exports = mongoose.model('User', userSchema);