const express = require("express");
const app = express();
const router = require("./routes/router.js");


app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 5000 ,() => console.log(`server running on port ${port}`) )
