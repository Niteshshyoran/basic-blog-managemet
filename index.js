const express = require("express");
const fs = require("fs");


const app = express();
app.use(express.json());


app.post("/user", (req,res) => {
    //post route
})


app.listen(3000,() => {
    console.log(`server is running at http//:localhost3000 `)
})