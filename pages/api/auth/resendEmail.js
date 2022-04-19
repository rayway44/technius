const verifyEmailSend = require('./verifyEmailSend')
const { v4: uuidv4 } = require('uuid');
const db = require('../mysqlConnection')

export default async (req, res) => {
    const verifyToken = await uuidv4()

    db.query('UPDATE teachers SET ? WHERE email = ?', [{verify_token: verifyToken}, req.body.email], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            verifyEmailSend(req.body.first_name, req.body.email, verifyToken)
            res.send(200)
        }
    })
    
}