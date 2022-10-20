const db  = require('./mysqlConnection')

export default (req, res) => {
    db.query('SELECT * FROM classes WHERE class_uuid = ?', [req.body.uuid], (err, result) => {
        if (err) {
            console.error(err)
        } else if (result.length > 0) {
            res.send('success')
        } else {
            res.send('invalid')
        }
    })
}