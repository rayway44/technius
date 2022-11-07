const db = require('../mysqlConnection')

export default (req, res) => {
    db.query("UPDATE teachers SET ? WHERE verify_token = ?", [{verified_email: true, verify_token: null}, req.body.verifyToken], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(404).send('Account not found')
        } else {
            return res.status(200).send('Account verified')
        }
    })
}