const db = require('../../mysqlConnection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie')

export default (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM teachers WHERE email = ?', [email], function(err, result) {
        if (err) {
            console.log(err)
        } else if (result.length === 0) {
            return res.status(404).send('user not found')
        } else {
            const passCheck = bcrypt.compareSync(password, result[0].password)

            if (!passCheck) {
                return res.status(401).send('incorrect password')
            } else {
                const accessToken = jwt.sign({teacher_id: result[0].teacher_id, first_name: result[0].first_name}, process.env.JWT_SECRET, {expiresIn: '1h'})
                
                const tokensToSet = [
                    cookie.serialize('access-token', accessToken, {
                        httpOnly: true,
                        sameSite: true,
                        maxAge: 3600,
                        path:'/'
                    })
                ]
                
                res.setHeader('set-cookie', tokensToSet);
                
                return res.send({teacher_id: result[0].teacher_id, first_name: result[0].first_name})
            }
        }
    })
}