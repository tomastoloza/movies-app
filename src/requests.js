const apiKey = "6e87333b06msh0c2cc5644d8db4dp1e85abjsnb6f0d82e72f0";


const fetchApi = async (endpoint) => {
    let api = await fetch(endpoint, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    });
    console.log("API Response: ", api.status, api.statusText)
    return api.json();
}

const fetchTopRatedMovies = () => {
    return fetchApi('https://imdb8.p.rapidapi.com/title/get-top-rated-movies');
}

const fetchMovieById = (id) => {
    //tconst=tt0944947
    return fetchApi(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`);
}

//TODO: Store movies by id in localstorage
const fetchMoviesBySearch = (title) => {
    let api = fetchApi(`https://imdb8.p.rapidapi.com/title/find?q=${title}`);
    return api
        .then(response => {
            return response
        })
        .catch(response => {
            console.log(response)
        });
}

exports.fetchMoviesBySearch = fetchMoviesBySearch
exports.fetchTopRatedMovies = fetchTopRatedMovies