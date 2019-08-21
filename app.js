require('dotenv/config');
const express       = require('express')
const logger        = require('morgan')
const bodyParser    = require('body-parser') 
const router        = require('./src/Routes/index')

const app       = express()
const port      = process.env.PORT || 8080
const nodeEnv   = process.env.NODE_ENV || 'production'

app.listen(port, () => {
    console.log(`Server running in mode ${nodeEnv} on port ${port}`)
})

//app.use berfungsi untuk menggunakan package/fungsi tertentu kedalam express
app.use(logger('dev')) //menampilkan logger diterminal setiap kali menjalankan function
app.use(bodyParser.json()) //menggunakan tipe json dalam bodyParser
app.use(bodyParser.urlencoded({extended : false})) //false hanya bisa memberi tipe string/array jika true digunakan untuk menggunakan nested object
app.use(router);