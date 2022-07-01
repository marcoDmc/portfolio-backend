
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/router.js");


app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT || 3000 ,() => console.log(`server running`) )
