const db = require('../mysqlConnection')
const bcrypt = require('bcryptjs')

export default async (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 10)
    const uuid = req.body.uuid

    const [teachers, teacher_fields] = await db.promise().query('SELECT * FROM teachers WHERE reset_token = ?', [uuid])
    const [students, student_fields] = await db.promise().query('SELECT * FROM students WHERE reset_token = ?', [uuid])

    if (teachers.length > 0) {
        db.query('UPDATE teachers SET password = ?, reset_token = ? WHERE reset_token = ?', [password, null, uuid], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                return res.send(200)
            }
        })
    } else if (students.length > 0) {
        db.query('UPDATE students SET password = ?,  reset_token = ? WHERE reset_token = ?', [password, null, uuid], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                return res.send(200)
            }
        })
    } else {
        return res.status(404).send('an error occurred')
    }
}