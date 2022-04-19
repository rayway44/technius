const db  = require('./mysqlConnection')

export default async (req, res) => {
    const uuid = req.body.uuid

    const [teachers, teacherFields] = await db.promise().query('SELECT teacher_id FROM teachers WHERE reset_token = ?', [uuid])

    const [students, studentFields] = await db.promise().query('SELECT student_id FROM students WHERE reset_token = ?', [uuid])


    if (teachers.length > 0) {
        res.status(200).send(teachers)
    } else if (students.length > 0) {
        res.status(200).send(students)
    } else {
        res.send(null)
    }

}