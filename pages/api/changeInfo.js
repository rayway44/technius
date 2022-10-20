const db = require('./mysqlConnection')
const bcrypt = require('bcryptjs')

export default async (req, res) => {
    const body = req.body

    if (body.accountType === 'teacher') {
        if (body.password.length > 0) {
            const newPassword = bcrypt.hashSync(body.password, 10)

            db.query('UPDATE teachers SET ? WHERE email = ?', [{first_name: body.firstname, last_name: body.lastname, school_id: body.school, password: newPassword}, body.email], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send('An error occurred')
                } else {
                    return res.status(200).send('Information updated')
                }
            })
        } else {
            db.query('UPDATE teachers SET ? WHERE email = ?', [{first_name: body.firstname, last_name: body.lastname, school_id: body.school}, body.email], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send('An error occurred')
                } else {
                    return res.status(200).send('Information updated')
                }
            })
        }
    } else if (body.accountType === 'student') {
        if (body.password.length > 0) {
            const newPassword = bcrypt.hashSync(body.password, 10)

            db.query('UPDATE students SET ? WHERE email = ?', [{first_name: body.firstname, last_name: body.lastname, school_id: body.school, password: newPassword, ethnicity: body.ethnicity, gender: body.gender, year_of_birth: body.year_of_birth}, body.email], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send('An error occurred')
                } else {
                    return res.status(200).send('Information updated')
                }
            })
        } else {
            db.query('UPDATE students SET ? WHERE email = ?', [{first_name: body.firstname, last_name: body.lastname, school_id: body.school, ethnicity: body.ethnicity, gender: body.gender, year_of_birth: body.year_of_birth}, body.email], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send('An error occurred')
                } else {
                    return res.status(200).send('Information updated')
                }
            })
        }
    }
}