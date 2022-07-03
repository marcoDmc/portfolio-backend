const puppeteer = require('puppeteer')
const ejs = require('ejs')
const path = require('path')
require('dotenv').config()

module.exports = {
  async handleSendPDF(req, res) {
    try {
      const browser = await puppeteer.launch()

      const page = await browser.newPage()

      await page.goto(`http://localhost:3000/curriculum`, {
        waitUntil: 'networkidle0',
      })

      const pdf = await page.pdf({
        printBackground: true,
        format: 'Letter',
      })

      res.contentType('application/pdf')

      await res.send(pdf)
      await browser.close()
    } catch (e) {
      return res
        .status(400)
        .send(`unable to load file contents correctly: ${e}`)
    }
  },
  handleRenderEjs(req, res) {
    const pathFile = path.resolve(
      path.join(__dirname, '../', 'views', 'index.ejs'),
    )

    ejs.renderFile(pathFile, (e, data) => {
      e
        ? res.send(`unable to load file contents correctly: ${e}`)
        : res.send(data)
    })
  },
}