require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

// exxpress app
const app = express();
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "Life Spring Clone API 🌳" });
});

// routes for user
app.use("/api/auth", userRoutes);

// connect to DB
mongoose
  .connect(`${process.env.MONGO_DB_URL}`)
  .then(() => {
    // listen for request
    app.listen(4000, () => {
      console.log("I on listen for port 4000 😎");
    });
  })
  .catch((error) => {
    console.log(error);
  });
