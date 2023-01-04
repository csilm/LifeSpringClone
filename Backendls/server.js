require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz");
const urlencoded = require("body-parser");
const json = require("body-parser");
const response = require("express");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const professionalsRoutes = require("./routes/professionalsRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");

// express app
const app = express();
app.use(express.json());

// app.use(json());
// app.use(urlencoded({
//   extended: false
// }));

// middleware
try {
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb" }));
} catch (error) {
  console.log(error);
}

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "Life Spring Clone API 🌳" });
});

// routes for user
app.use("/api/auth", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/professionals", professionalsRoutes);
app.use("/api/user/profile", userProfileRoutes);

// connect to DB
mongoose.set("strictQuery", true);

try {
  mongoose.connect(`${process.env.MONGO_DB_URL}`);
} catch (error) {
  console.log(error);
}

app.use("/ssl", async (req, res, next) => {
  const data = {
    total_amount: 300,
    currency: "EUR",
    tran_id: "REF123",
    success_url: `${process.env.URL}/ssl-payment-success`,
    fail_url: `${process.env.URL}/ssl-payment-failure`,
    cancel_url: `${process.env.URL}/ssl-payment-cancel`,
    ipn_url: `${process.env.URL}/ssl-payment-ipn`,
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "cust@yahoo.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
  };
  const sslcommer = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.PASS,
    false
  ); //true for live default false for sandbox
  sslcommer.init(data).then((data) => {
    //process the response that got from sslcommerz
    //https://developer.sslcommerz.com/doc/v4/#returned-parameters
    if (data?.GatewayPageURL) {
      return res.status(200).redirect(data?.GatewayPageURL);
    } else {
      return res.status(400).json({
        message: "SSL not success",
      });
    }
  });
});

app.post("/ssl-payment-success", async (req, res, next) => {
  return res.status(200).json({
    data: req.body,
  });
});

app.post("/ssl-payment-failure", async (req, res, next) => {
  return res.status(400).json({
    data: req.body,
  });
});
app.post("/ssl-payment-cancel", async (req, res, next) => {
  return res.status(200).json({
    data: req.body,
  });
});
app.post("/ssl-payment-ipn", async (req, res, next) => {
  return res.status(200).json({
    data: req.body,
  });
});

app.listen(4000 || process.env.PORT, () => {
  console.log("I on listen for port 4000 😎");
});
