// mongodb+srv://moheranus:kosif094905@cluster0.tl3k5l5.mongodb.net/auth?retryWrites=true&w=majority
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    
    `mongodb+srv://moheranus:kosif094905@cluster0.tl3k5l5.mongodb.net/auth?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(7000);
    console.log("Listening to localhost 7000!");
    console.log("Database is connected! ");
  })
  .catch((err) => console.log(err));