const db = require('./mysqlConnection')

export default (req, res) => {
    db.query('SELECT * FROM schools', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
}