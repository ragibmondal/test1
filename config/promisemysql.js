const con = require('./config')

function query(sql) {
    if (!sql) {
        return resolve("No sql provided")
    }
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                return resolve(err)

            } else {
                return resolve(result)
            }
        })
    })
}

exports.query = query