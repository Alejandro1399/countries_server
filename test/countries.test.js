const SearchCountry = require('../models/countries');


describe('Make a successful api query', () => {

  it('Make a request get all ', async () => {
    const search = new SearchCountry();
    const [response] = await search.allCountry();
    expect(response.msg).toBe('Consulta exitosa')
  });

  it('Make a request get by name', async () => {
    const search = new SearchCountry();
    const [response] = await search.country("Peru");
    expect(response.msg).toBe('Consulta exitosa')

  });

  it('Make a bad request get by name', async () => {
    const search = new SearchCountry();
    const [response] = await search.country("Peru1234");
    expect(response.msg).toBe('No existe el país consultado')

  });

});
