const moment = require('moment');
const connection = require('../database/config.db');


const fillingDB = (countries,area,population) => {

    const ts = moment().format('YYYY MM DD, h:mm:ss');
    const sql = `INSERT INTO logs (search, area, population, date) VALUES ('${countries}', ${area}, ${population}, '${ts}')`
    try {
        connection.query(sql);
        console.log('Log creado exitosamente');
        return true 
    } catch (error) {
        console.error('Error creando el log');
        return false 
    }
}

module.exports = fillingDB;