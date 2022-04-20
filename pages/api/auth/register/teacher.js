const bcrypt = require('bcryptjs')
const db = require('../../mysqlConnection')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const verifyEmailSend = require('../verifyEmailSend')


export default async (req, res) => {
    const verifyToken = await uuidv4()
    db.query('SELECT * from teachers WHERE email = ?', [req.body.email], (err, result) => {
        if (result.length > 0) {
            return res.status(409).send("user already exists")
        } else {
            const hashedPass = bcrypt.hashSync(req.body.password, 10)

            db.query('INSERT INTO teachers SET ?', {first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email, password: hashedPass, school_id: req.body.school, found_us: req.body.findOut, verify_token: verifyToken}, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    verifyEmailSend(req.body.firstname, req.body.email, verifyToken)

                    const accessToken = jwt.sign({teacher_id: result.insertId, first_name: req.body.firstname}, process.env.JWT_SECRET, {expiresIn: '1h'})
                
                    const tokensToSet = [
                        cookie.serialize('access-token', accessToken, {
                            httpOnly: true,
                            sameSite: true,
                            maxAge: 3600,
                            path:'/'
                        })
                    ]
                    
                    res.setHeader('set-cookie', tokensToSet);

                    return res.status(201).send("User Created")
                }
            })
        }
    })
}