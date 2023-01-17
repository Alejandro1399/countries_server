const axios = require("axios");

class SearchCountry {

    constructor() {

    }
    async country(land = '') {

        try {
            // Petición http
            const intance = axios.create({
                baseURL: `https://restcountries.com/v3.1/name/${land}`,
            });

            const resp = await intance.get();
            return resp.data.map(land => ({
                area: land.area,
                population: land.population,
                img_path: land.flags.svg,
                coat_arms: land.coatOfArms.svg,
                msg: 'Consulta exitosa'
            }));

        } catch (error) {
            return [{
                area: 0,
                population: 0,
                img_path:'',
                coat_arms: '',
                msg: 'No existe el país consultado'
            }];
        }
    }

    async allCountry() {

        try {
            // Petición http
            const intance = axios.create({
                baseURL: `https://restcountries.com/v3.1/all`,
            });

            const resp = await intance.get();
            return resp.data.map(land => ({
                name: land.name.common,
                area: land.area,
                population: land.population,
                img_path: land.flags.svg,
                coat_arms: land.coatOfArms.svg,
                msg: 'Consulta exitosa'
            }));

        } catch (error) {
            return [{
                name: '',
                area: 0,
                population: 0,
                img_path: '',
                coat_arms:'' ,
                msg: 'No existe el pais consultado'
            }];
        }
    }
}

module.exports = SearchCountry;