const express=require ("express");
const app=express();
const mainRouter=require("./Routes/index")


app.use("/api/v1",mainRouter);

app.listen(3000);