const express = require("express");
const  port = 80 || 5000;
const app = express();
const router = require("./routes/router.js");


app.use(express.json());
app.use(router);

app.listen(port ,() => console.log(`server running on port ${port}`) )
