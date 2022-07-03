const nodeMailer = require('nodemailer')
require('dotenv').config()

const transport = nodeMailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT_EMAIL,
  secure: true,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
})
module.exports = transport
