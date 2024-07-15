// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./Routes/index2"); // Assuming this is your router file
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log("APP is Running on port", port);
});
