import './App.css';
import './index.css';
import Search from "./components/Search";
import Section from "./components/Section";
import {useEffect, useState} from "react";
import {fetchTopRatedMovies} from "./requests";

function App() {
    const [search, setSearch] = useState([]);
    const [topRated, setTopRated] = useState([]);

    // useEffect(() => {
    //     async function topRated() {
    //         return fetchTopRatedMovies();
    //     }
    //
    //     topRated().then(value => {
    //         setTopRated(value);
    //     });
    // }, []);


    return (
        <div className="App">
            <p className={"text-5xl text-white font-black p-2 m-2"}>IMDb Movie Finder</p>
            <Search searchMovies={search} setSearchMovies={setSearch}/>
            {/*    Per year, slider with year and get movies from that year, probably there's an endpoint*/}
            {/*    Slider with genres and fetch movies from that gender*/}
        </div>
    );
}

export default App;
