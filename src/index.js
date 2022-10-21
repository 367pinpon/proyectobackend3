const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const rolRoute = require("./routes/rol");
const sucursalRoute = require("./routes/sucursal");
const pagoRoute = require("./routes/pago");
const productoRoute = require("./routes/producto");
const ventaRoute = require("./routes/venta");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", rolRoute);
app.use("/api", sucursalRoute);
app.use("/api", pagoRoute);
app.use("/api", productoRoute);
app.use("/api", ventaRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));