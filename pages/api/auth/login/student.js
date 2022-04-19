const db = require('../../mysqlConnection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie')

export default async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const uuid = req.body.uuid

    const [class_id, fields] = await db.promise().query('SELECT class_id FROM classes WHERE class_uuid = ?', [uuid])
    db.query('SELECT * FROM students WHERE email = ?', [email], function(err, result) {
        if (err) {
            console.log(err)
        } else if (result.length === 0) {
            return res.status(404).send('user not found')
        } else {
            const passCheck = bcrypt.compareSync(password, result[0].password)

            if (!passCheck) {
                return res.status(401).send('incorrect password')
            } else {
                if (class_id.length > 0) {
                    const {is_enrolled, fields} = db.query('SELECT * FROM enrolled_students WHERE class_id = ? AND student_id = ?', [class_id, result[0].student_id])

                    if (!is_enrolled) {
                        db.query('INSERT INTO enrolled_students SET ?', {student_id: result[0].student_id, class_id: class_id[0].class_id})
                    }

                }

                const accessToken = jwt.sign({student_id: result[0].student_id, first_name: result[0].first_name}, process.env.JWT_SECRET, {expiresIn: '1h'})
                
                const tokensToSet = [
                    cookie.serialize('access-token', accessToken, {
                        httpOnly: true,
                        sameSite: true,
                        maxAge: 3600,
                        path:'/'
                    })
                ]
                
                res.setHeader('set-cookie', tokensToSet);
                
                res.send({student_id: result[0].student_id, first_name: result[0].first_name})
            }
        }
    })
}