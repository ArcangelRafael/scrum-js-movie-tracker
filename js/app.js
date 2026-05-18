// Variables para Guardar las Peliculas de la API
let movies = {}, movieSelected = {};

// [Funcion] Consultar Top 250 en IMDb
const fetchTop250 = async () => {
    
    const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bf9539f4e0mshb5356a5d79041a3p174408jsn2b0792f378dc',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

fetchTop250();