const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5000", 
  methods: "GET,POST,PUT,DELETE",
  credentials: true, 
}));


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Sucessfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running!");
});
