const express = require("express");
const  port = 80;
const app = express();
const router = require("./routes/router.js");


app.use(express.json());
app.use(router);

app.listen(port || 5000 ,() => console.log(`server running on port ${port}`) )
