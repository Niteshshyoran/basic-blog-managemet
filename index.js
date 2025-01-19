const express = require("express");

const app = express();
app.use(express.json());

app.listen(3000,() => {
    console.log(`server is running at http//:localhost3000 `)
})