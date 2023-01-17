require('dotenv').config()
const moment = require('moment');

const connection = require('../database/config.db');

describe('Database connection', () => {

    it('I try to connect to the database', async () => {

        await connection.connect();
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect( "connected"||"authenticated").toBe(connection.state)

    })

    it('Im trying to do an insert to the database.', async () => {
        const ts = moment().format('YYYY MM DD, h:mm:ss');
        const sql = `INSERT INTO logs (search, area, population, date) VALUES ('Pruebadb', ${0}, ${0}, '${ts}')`
        let result;

        connection.query(sql, (err, res) => {
            if (err) throw (err);
            return result = res;

        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        expect(result.insertId).toBeLessThan(10000);
        expect(result.insertId).not.toBeLessThan(0);

    })
});


afterAll(() => {
    connection.destroy();
})

