const apiKey = "6e87333b06msh0c2cc5644d8db4dp1e85abjsnb6f0d82e72f0";

const fetchApi = async (endpoint) => {
    let api = await fetch(endpoint, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }).then(response => {
        return response.json();
    }).catch(response => {
        console.log(response)
    });
    console.log("API Response: ", api.status, api.statusText)
    return api;
}

//TODO: Store movies by id in localstorage
const fetchMoviesBySearch = (title) => {
    return fetchApi(`https://imdb8.p.rapidapi.com/title/find?q=${title}`);
}

const fetchMoviePlot = (id) => {
    return fetchApi(`https://imdb8.p.rapidapi.com/title/get-plots?tconst=${id}`);
}

module.exports = {
    fetchMoviesBySearch: fetchMoviesBySearch,
    // fetchTopRatedMovies: fetchTopRatedMovies,
    // fetchDetails: fetchDetails,
    fetchMoviePlot: fetchMoviePlot
};
