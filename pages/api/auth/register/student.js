const bcrypt = require('bcryptjs')
const db = require('../../mysqlConnection')
const jwt = require('jsonwebtoken')

export default (req, res) => {
    db.query('SELECT * from students WHERE email = ?', [req.body.email], (err, result) => {
        if (result.length > 0) {
            return res.status(409).send("user already exists")
        } else {
            const hashedPass = bcrypt.hashSync(req.body.password, 10)

            db.query('INSERT INTO students SET ?', {first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email, password: hashedPass, school_id: req.body.school, considered_career: req.body.consideredCareer, ethnicity: req.body.ethnicity, gender: req.body.gender, year_of_birth: req.body.yearOfBirth}, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    db.query('SELECT class_id from classes WHERE class_uuid = ?', [req.body.uuid], (err, result2) => {
                        if (err) {
                            console.log(err)
                        } else if (result2.length > 0) {
                            db.query('INSERT INTO enrolled_students SET ?', {student_id: result.insertId, class_id: result2[0].class_id}, (err, result3) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log('student created')
                                }
                            })
                        } else {
                            console.log('no class found')
                        }
                    })
                }
            })

            res.send("user created")
        }
    })
}