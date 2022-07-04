const Express = require('express')
const router = Express.Router()
const func = require('../controllers/handleSendEmail.js')
const pdf = require('../controllers/handleGeneratePdf')
const timeout = require('connect-timeout')


 function haltOnTimedout (req, res, next) {
    if (!req.timeout) next()
  }
router.get('/pdf', timeout('30s'),haltOnTimedout, pdf.handleSendPDF)
router.get('/curriculum', pdf.handleRenderEjs)
router.post('/', func.sendEmail)

module.exports = router
