const db  = require('../mysqlConnection')

export default async (req, res) => {
    const { id } = req.query
    let classList = {}

    const [classes, fields] = await db.promise().query('SELECT * FROM classes WHERE teacher_id = ?', [id])

    for(var i = 0; i < classes.length; i++) {
        const [students, stuFields] = await db.promise().query(
            `
                SELECT enrolled_students.student_id, CONCAT(students.first_name, ' ', students.last_name) as name FROM enrolled_students
                JOIN students ON  enrolled_students.student_id = students.student_id
                WHERE class_id = ?
            `, [classes[i].class_id])
        
        classList[classes[i].class_name] = {...classes[i], students: JSON.parse(JSON.stringify(students))}
    }

    res.send(classList)
}