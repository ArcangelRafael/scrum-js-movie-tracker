// Variables para Guardar las Peliculas de la API
let movies = {}, movieSelected = {};

// [Funcion] Consultar Top 250 en IMDb
const fetchTop250 = async () => {
    
    const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'TU_API_KEY_AQUI',
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