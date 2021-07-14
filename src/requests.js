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
    console.log("Fetching from API", endpoint)
    return api;
}

export const fetchMoviesBySearch = (title) => {
    return fetchFromLocalStorageOrSet(title, `https://imdb8.p.rapidapi.com/title/find?q=${title}`, "queries");
}

export const fetchMoviePlot = (id) => {
    return fetchFromLocalStorageOrSet(id, `https://imdb8.p.rapidapi.com/title/get-plots?tconst=${id}`, "titles");
}

async function fetchFromLocalStorageOrSet(query, endpoint, localStorageKey) {
    let entries = Object.entries(localStorage);
    console.log(entries)
    let queries = localStorage.getItem(localStorageKey);
    // If there are no queries saved
    if (!queries) {
        localStorage.setItem(localStorageKey, JSON.stringify({}))
    }
    queries = localStorage.getItem(localStorageKey);
    let jsonQueries = JSON.parse(queries);
    //Get query from localStorage
    if (jsonQueries[query] && Object.keys(jsonQueries[query]).length > 0) {
        return jsonQueries[query];
    }
    // Fetch
    jsonQueries[query] = await fetchApi(endpoint);
    localStorage.setItem(localStorageKey, JSON.stringify(jsonQueries))
    return jsonQueries[query];
}
