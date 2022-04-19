const db  = require('./mysqlConnection')

export default (req, res) => {
    db.query("UPDATE classes SET class_name = ? WHERE class_id = ?", [req.body.class_name, req.body.class_id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(200)
        }
    })
}