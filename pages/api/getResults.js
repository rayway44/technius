const db  = require('./mysqlConnection')

export default async (req, res) => {
    const class_id = req.body.class
    const student_id = req.body.student_id

    db.query('SELECT * FROM results WHERE class_id = ? AND student_id = ?', [class_id, student_id], (err, result) => {
        if (err) {
            console.log(err)
        } else if (result.length > 0) {
            res.send(result)
        } else {
            res.send(null)
        }
    })
}