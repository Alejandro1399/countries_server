const { response, request } = require('express');

const SearchCountry = require('../models/countries');
const fillingDB = require('../helpers/db-filling');


const countriesGet = async (req = request, res = response) => {
    const { countries } = req.params
    // consulta a la api 
    const search = new SearchCountry();
    const [response] = await search.country(countries);

    // llenado base de datos 
    // const fill = fillingDB(countries, response.area, response.population)
    // respuesta 
    response.msg === "Consulta exitosa" ? (res.status(202)) : (res.status(400))
    res.json({
        name: countries,
        area: response.area,
        population: response.population,
        msg: response.msg,
        img_path: response.img_path,
        coat_arms: response.coat_arms,
        // log: fill
    });


}
const countriesallGet = async (req = request, res = response) => {

    // consulta a la api 
    const search = new SearchCountry();
    const response = await search.allCountry();

    // llenado base de datos 
    // const fill = fillingDB("Todos", 9999999999999999999, 9999999999999999999)

    // respuesta 
    res.json({
        // log: fill,
        response: response
    });
}

const countriesallGetforArea = async (req = request, res = response) => {

    // consulta a la api 
    const search = new SearchCountry();
    const response = await search.allCountry();

    const area = response.sort(((a, b) => b.area - a.area));

    // llenado base de datos 
    // const fill = fillingDB("Todos", 9999999999999999999, 9999999999999999999)

    // respuesta 
    res.json({
        // log: fill,
        response: area
    });
}

const countriesallGetforPopulation = async (req = request, res = response) => {

    // consulta a la api 
    const search = new SearchCountry();
    const response = await search.allCountry();

    const population = response.sort(((a, b) => b.population - a.population));

    // llenado base de datos 
    // const fill = fillingDB("Todos", 9999999999999999999, 9999999999999999999)

    // respuesta 
    res.json({
        // log: fill,
        response: population
    });
}


module.exports = {
    countriesGet,
    countriesallGet,
    countriesallGetforArea,
    countriesallGetforPopulation
}