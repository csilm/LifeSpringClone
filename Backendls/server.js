require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const blogsRoutes = require("./routes/blogsRoutes");

// express app
const app = express();
app.use(express.json());

// middleware
app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "Life Spring Clone API 🌳" });
});

// routes for user
app.use("/api/auth", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/blogs", blogsRoutes);

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
