const Express = require("express");
const router = Express.Router();
const func = require("../controllers/handleSendEmail.js")

router.post("/",func.sendEmail)



module.exports = router;