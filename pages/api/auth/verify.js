const jwt = require('jsonwebtoken');
const db = require('../mysqlConnection');
const cookie = require('cookie')


export default (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '')
    if (!cookies['access-token']) {
        console.log('no cookie')
        return res.send({})
    }

    console.log('verification in progress')

    if (cookies['access-token']) {
        const decoded = jwt.verify(cookies['access-token'], process.env.JWT_SECRET)
        if (decoded.teacher_id) {
            db.query('SELECT teacher_id, first_name, last_name, email, school_id, verified_email FROM teachers WHERE teacher_id = ?', [decoded.teacher_id], (err, result) => {
                if (err) {
                    console.log(err) 
                } else if (result.length > 0) {
                    return res.json({user: result[0]})
                }
            })
        } else if (decoded.student_id) {
            db.query('SELECT student_id, first_name, last_name, email, school_id, year_of_birth, ethnicity, gender FROM students WHERE student_id = ?', [decoded.student_id], (err, result) => {
                if (err) {
                    console.log(err) 
                } else if (result.length > 0) {
                    return res.json({user: result[0]})
                }
            })
        } else {
            return res.send('something went wrong')
        }
        
    } 
}