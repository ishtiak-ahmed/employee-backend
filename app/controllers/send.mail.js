var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com', // replace this with real gmail id
    pass: 'yourpassword' // replace this with real password
  }
});

const validateData = (data) => {
  if (!data.emails?.length) return ({ error: true, message: 'At least one email is required' })
  if (!data.subject) return ({ error: true, message: 'Mail Subject is required' })
  if (!data.body) return ({ error: true, message: 'Email body is required' })
  return true;
}

exports.sendMailToEmployees = (req, res) => {
  const { emails, subject, body } = req.body;
  const validate = validateData(req.body)
  if (validate.error) {
    res.status(400).send({
      message: validate.message
    });
    return;
  }
  const receivers = emails.join(', ');

  var mailOptions = {
    from: 'hr@company.co',
    to: receivers,
    subject: subject,
    html: body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).send({
        message: error
      });
    } else {
      console.log('Email sent: ' + info.response);
      res.send(`Mail sent to this emails ${receivers}`)
    }
  });

}