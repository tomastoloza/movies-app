import './App.css';
import './index.css';
import Search from "./components/Search";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState([]);

    return (
        <div className="App">
            <p className={"text-5xl text-white font-black p-2 m-8"}>IMDb Movie Finder</p>
            <p className={"text-white"}>This app is a simple movie detail finder for any movie that is in IMDb</p>
            <Search searchMovies={search} setSearchMovies={setSearch}/>
        </div>
    );
}

export default App;
