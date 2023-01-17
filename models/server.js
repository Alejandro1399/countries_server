const express = require('express')
var cors = require('cors')
const connection = require('../database/config.db')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080

        this.countriesPath = '/api/countries'

        // Database connection
        this.connectionDb();

        // Middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    connectionDb() {
        try {
            connection.connect();
            console.log('Base de datos online');
        } catch (error) {
            console.error('Error al conectar con la base de datos');
        }
    }
    middlewares() {
        // cors 
        this.app.use(cors())

        // Parseo Json del body
        this.app.use(express.json())

        // Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.countriesPath, require('../routes/countries.routes'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto : ${this.port}`)
        })
    }
}


module.exports = Server;