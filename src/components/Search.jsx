import React, {useState} from 'react';
import Section from "./Section";
import Spinner from "./Spinner";
const {fetchMoviesBySearch} = require("../requests")

const Search = ({searchMovies, setSearchMovies}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cargando, guardarCargando] = useState(false);

    const fetchSearch = async (event) => {
        event.preventDefault();
        if (searchTerm !== "") {
            guardarCargando(true);
            setTimeout(async () => {
                let movies = await fetchMoviesBySearch(searchTerm).then(r => r);
                console.log(movies.results)
                setSearchMovies(movies.results);
                guardarCargando(false);
            })
        }
    };

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={""}>
            <p className={"text-xl font-bold m-6"}>Search movies</p>
            <form onSubmit={fetchSearch}>
                <input type="search" placeholder={"Search"}
                       className="text-gray-900 focus:outline-none p-2 rounded-l-lg bg-gray-100 border-gray-400 w-1/2 shadow-lg"
                       value={searchTerm}
                       onChange={handleChange}/>
                <button type="submit"
                        className="focus:outline-none p-2 rounded-r-lg bg-green-400 hover:bg-green-500 border-gray-400 font-bold text-gray-700 shadow-lg">
                    Search
                </button>
            </form>
            <div className={"m-4"}>
                {cargando ? <Spinner/> : null}
                {(!cargando && searchMovies && <Section movies={searchMovies}/>) ||
                <p className={"text-white"}>No results found for your search</p>}
            </div>
        </div>
    );
};

export default Search;
