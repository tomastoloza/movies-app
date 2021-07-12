import React, {useEffect, useState} from 'react';
import {fetchMoviesBySearch} from "../requests";
import Movie from "./Movie";
import Section from "./Section";
import Spinner from "./Spinner";

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
        <div className={"m-2"}>
            <p className={"text-xl font-bold m-2 text-white"}>Search movies</p>
            <form onSubmit={fetchSearch}>
                <input type="search" placeholder={"Search"}
                       className="border-2 focus:outline-none p-2 rounded-l-lg bg-gray-300 border-gray-500 w-1/2"
                       value={searchTerm}
                       onChange={handleChange}/>
                <button type="submit"
                        className="border-2 focus:outline-none p-2 rounded-r-lg bg-yellow-500 border-gray-500 font-bold">
                    Search
                </button>
            </form>
            <div className={"m-4"}>
                {cargando ? <Spinner/> : null}
                {!cargando && searchMovies && <Section movies={searchMovies}/> ||
                <p className={"text-white"}>No results found for your search</p>}
            </div>
        </div>
    );
};

export default Search;
