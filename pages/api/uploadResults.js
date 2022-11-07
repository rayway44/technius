const db  = require('./mysqlConnection')

export default async (req, res) => {
    if (!req.body.student_id) {
        console.log('no student_id found')
        return res.send('no student_id found')
    } 

    const [classes, fields] = await db.promise().query('SELECT class_id FROM enrolled_students WHERE student_id = ? ORDER BY date_created DESC', [req.body.student_id])


    db.query("INSERT INTO results SET ?", {class_id: classes[0].class_id, student_id: req.body.student_id, career_rec: req.body.career_rec, attr1: req.body.attr1, attr2: req.body.attr2, character: req.body.character}, (err, result) => {
        if (err) {
            console.log(err)
        } else if (result.length > 0) {
            console.log('result added successfully')
            res.send('result added successfully')
        }
    })
}