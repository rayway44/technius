const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default async  (req, res) => {
    if (req.body.email && req.body.class) {
        var mailOptions = {
            from: process.env.EMAIL,
            to: process.env.REQUEST_INFO_EMAIL,
            subject: 'Mission Technius Request for Info',
            text: 
            `
            User:  ${req.body.email} has requested for information about their class: ${req.body.class}

            ` 
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err)
            } else {
                return res.status(200).send('Request sent successfully');
            }
        })

    } else {
        return res.status(404).send('Request could not be sent')
    }
}