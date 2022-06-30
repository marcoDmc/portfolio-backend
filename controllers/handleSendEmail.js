const Transport = require('../models/nodemailer.config.js')

module.exports = {
  sendEmail(req, res) {
    const { name, email, message } = req.body
    if (!name || !email || !message)
      return res.status(401).json({ error: 'something is missing here' })
    Transport.sendMail({
      from: name,
      to: email,
      subject: 'nova mensagem',
      html: `<h1>uma mensagem de ${name}</h1> 
                <p>Message: <br/>${message}</p>`,
      text: `uma mensagem de ${name} 
                Message: ${message}`,
    })
      .then(() => res.status(200).json({ msg: 'success' }))
      .catch((e) =>
        res.status(400).json({ msg: `error , email could not be sent ${e}` }),
      )
  },
}
