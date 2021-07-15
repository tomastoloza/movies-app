import './App.css';
import './index.css';
import Search from "./components/Search";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState([]);

    return (
        <div className="App">
            <p className={"text-5xl font-black p-2 m-8 title"}>IMDb Movie Finder</p>
            <p className={""}>This app is a simple movie detail finder for any movie that is in IMDb</p>
            <Search searchMovies={search} setSearchMovies={setSearch}/>
        </div>
    );
}

export default App;
