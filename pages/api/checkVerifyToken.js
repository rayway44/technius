const db  = require('./mysqlConnection')

export default (req, res) => {
    const uuid = req.body.uuid

    db.query('SELECT teacher_id FROM teachers WHERE verify_token = ?', [uuid], (err, result) => {
        if (err) {
            console.log(err)
        } else if (result.length > 0) {
            res.status(200).send(result)
        } else {
            res.status(200).send(null)
        }
    })
}