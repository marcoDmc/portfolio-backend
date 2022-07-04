const puppeteer = require('puppeteer')
const ejs = require('ejs')
const path = require('path')
require('dotenv').config()

module.exports = {
  async handleSendPDF(req, res) {
    try {
      const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: [
          '--incognito',
          '--no-sandbox',
          '--single-process',
          '--no-zygote',
        ],
      })

      const page = await browser.newPage()

      await page.goto(
        `http://localhost:${process.env.PORT || 3000}/curriculum`,
        {
          waitUntil: 'load',
          timeout:0
        },
      )

      const pdf = await page.pdf({
        printBackground: true,
        format: 'Letter',
        margin:0
      })

      res.contentType('application/pdf')

      res.send(pdf)
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
