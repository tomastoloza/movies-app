import './App.css';
import './index.css';
import Search from "./components/Search";
import Section from "./components/Section";
import {useEffect, useState} from "react";

function App() {
    const [search, setSearch] = useState([]);
    const [topRated, setTopRated] = useState([]);

    return (
        <div className="App">
            <p className={"text-5xl text-white font-black p-2"}>IMDb Movie Finder</p>
            <Search searchMovies={search} setSearchMovies={setSearch}/>
            {/*<Section movies={topRated}/>*/}
            {/*    Per year, slider with year and get movies from that year, probably there's an endpoint*/}
        </div>
    );
}

export default App;
