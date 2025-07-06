const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoute = require("./routes/authRoute");
const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);

module.exports = app;