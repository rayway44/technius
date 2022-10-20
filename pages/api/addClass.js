const db  = require('./mysqlConnection')

export default (req, res) => {
    const id = req.body.teacher_id
    const name = req.body.class_name
    const uuid = req.body.class_uuid
    db.query('INSERT INTO classes SET ?', {teacher_id: id, class_name: name, class_uuid: uuid}, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('class added')
        }
    })
}