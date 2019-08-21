const db = require('../Configs/mysql-connect')

module.exports = {
    getTypes : () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tipe', (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getTypeById : (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tipe WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    postType : (req) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO tipe (nama) VALUES (?)', [req.nama], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    patchType : (req, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE tipe SET nama=? WHERE id=?', [req.nama, id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    deleteType : (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM tipe WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    }
}