const db = require('../mysqlConnection')
const { v4: uuidv4 } = require('uuid');
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


export default async (req, res) => {
    const [teachers, fields] = await db.promise().query('SELECT * FROM teachers WHERE email = ?', [req.body.email])
    const [students, field] = await db.promise().query('SELECT * FROM students WHERE email = ?', [req.body.email])

    if (teachers.length === 0 && students.length === 0) {
        return res.status(404).send('user does not exist')
    } else if (teachers.length > 0) {
        const uuid = await uuidv4()

        var mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Mission Technius Reset Password',
            text: 
            `Hi ${teachers[0].first_name},

            There was a request to change your Mission Technius password!
            
            If you did not make this request then please ignore this email.
            
            Otherwise, please click this link to change your password: ${process.env.SERVER_URL}/password-reset/${uuid}
            ` 
        };

        db.query('UPDATE teachers SET reset_token = ? WHERE email = ?', [uuid, req.body.email], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                transporter.sendMail(mailOptions, function(err, info) {
                    if (err) {
                        console.log(err)
                    }
                })
                return res.send(200)
            }
        })
    } else if (students.length > 0) {
        const uuid = await uuidv4()

        var mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Mission Technius Reset Password',
            text: 
            `Hi ${students[0].first_name},

            There was a request to change your password!
            
            If you did not make this request then please ignore this email.
            
            Otherwise, please click this link to change your password: ${process.env.SERVER_URL}/password-reset/${uuid}
            ` 
        };

        db.query('UPDATE students SET reset_token = ? WHERE email = ?', [uuid, req.body.email], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                transporter.sendMail(mailOptions, function(err, info) {
                    if (err) {
                        console.log(err)
                    }
                })
                return res.send(200)
            }
        })
    }
}