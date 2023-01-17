const { Router } = require('express');
const { countriesGet, countriesallGet, countriesallGetforArea, countriesallGetforPopulation } = require('../controllers/countries.controllers');

const router = Router();

router.get('/', countriesallGet)

router.get('/:countries', countriesGet)

router.get('/v1/area', countriesallGetforArea)

router.get('/v1/population', countriesallGetforPopulation)


module.exports = router