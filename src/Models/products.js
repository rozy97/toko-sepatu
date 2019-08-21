const db = require('../Configs/mysql-connect')
let query = 'SELECT produk.id, produk.nama, cabang.nama as branch, tipe.nama as categorie, produk.jumlah FROM produk INNER JOIN cabang ON cabang.id=produk.id_cabang INNER JOIN tipe ON tipes.id=produk.id_tipe'

module.exports = {
    getProducts : () => {
        return new Promise((resolve, reject) => {
            db.query(`${query}`, (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByName : (name) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE produk.nama=?`, [name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    postProduct : (req) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO produk SET ?', [req], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    patchProduct : (req, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE produk SET ? WHERE id=?', [req, id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    deleteProduct : (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM produk WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByBranch : (name) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE cabang.nama=?`, [name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByType : (name) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE tipe.nama=?`, [name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByQty : (qty) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE produk.jumlah=?`, [qty], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsPage : (page) => {
        return new Promise((resolve, reject) => {
            let limit = 5
            let pages = (page - 1) * limit
            db.query(`${query} LIMIT ?,?`, [pages, limit], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    }
} 