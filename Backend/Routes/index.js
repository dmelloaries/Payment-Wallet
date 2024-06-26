const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account.js");

const routers = express.Router();

routers.use("/user", userRouter);
routers.use("/account", accountRouter);

module.exports = routers;