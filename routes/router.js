const Express = require('express')
const router = Express.Router()
const func = require('../controllers/handleSendEmail.js')
const pdf = require('../controllers/handleGeneratePdf')

router.get('/pdf', pdf.handleSendPDF)
router.get('/curriculum', pdf.handleRenderEjs)
router.post('/', func.sendEmail)

module.exports = router
