const db  = require('../mysqlConnection')

export default (req, res) => {
    const { id } = req.query

    db.query('SELECT * FROM results WHERE student_id = ?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else if (results.length > 0) {
            res.send(results)
        } else {
            res.send(null)
        }
    })


}