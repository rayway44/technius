const nodemailer = require('nodemailer')

const verifyEmailSend = (firstname, email, verifyToken) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Mission Technius Email Verification',
        text: 
        `
        Hi ${firstname}, 

        Thanks for signing up with us at Mission Technius, please click the link below to verify your account

        https://missiontechnius.com/verify/${verifyToken}

        Sincerely, 
        The team at Mission Technius
        ` 
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            return true
        }
    })
    
}

module.exports = verifyEmailSend