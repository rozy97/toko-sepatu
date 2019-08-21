const db = require('../Configs/mysql-connect')

module.exports = {
    getBranchs : () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM cabang', (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    },

    getBranchsById : (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM cabang WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    postBranch: (req) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO cabang (nama) VALUES (?)', [req.nama], (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    },

    patchBranch: (req, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE cabang SET nama=? WHERE id=?', [req.nama, id], (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    },

    deleteBranch: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM cabang WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    }
}