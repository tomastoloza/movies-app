import React, {useState} from 'react';
import Spinner from "./Spinner";
const {fetchMoviePlot} = require("../requests")

const Movie = ({movie}) => {
    const types = {
        "movie": "Movie",
        "tvSeries": "TV Series"
    }

    const [toggle, setToggle] = useState(false);
    const [moviePlot, setMoviePlot] = useState("");
    const [cargando, guardarCargando] = useState(false);

    const getMoviePlot = async (id) => {
        if (!toggle) {
            guardarCargando(true)
            setTimeout(async () => {
                let promise = await fetchMoviePlot(id).then(r => r);
                let text = promise.plots[0].text
                setMoviePlot(text);
                guardarCargando(false);
            });

        }
    }

    let details = <div className={"mx-2"}>
        <p className={"m-2"}>{types[movie.titleType]}</p>
        <p className={"m-2"}>{movie.year}</p>
        {(movie.runningTimeInMinutes &&
        <p className={"m-2"}>{movie.runningTimeInMinutes} minutes</p>) ||
        <p>No duration defined</p>}
    </div>;

    return (
        <div
            className={"w-1/6 flex flex-col justify-between m-8 shadow-lg rounded-lg bg-gray-200 min-w-full md:min-w-max"}>
            {/*    Recieves the api info and loads picture info etc*/}
            <img className={"rounded-t-lg max-h-96 max-w-xs"} src={movie.image.url} alt=""/>
            <p className={"mx-2 mt-2 font-bold"}>{movie.title}</p>
            {/*When details is clicked changes the card content to the plot*/}

            {cargando ? <Spinner/> : null}

            {toggle ? !cargando && moviePlot && <p className={"text-left m-2 max-w-sm"}>{moviePlot}</p> : details}
            <button
                className={"font-bold bg-yellow-400 hover:bg-yellow-500 w-full h-10 rounded-b-lg w-full focus:ring-2 focus:ring-red-500 focus-inset"}
                onClick={() => {
                    setToggle(!toggle)
                    getMoviePlot(movie.id.split("/")[2]);
                }}>Details
            </button>
        </div>
    );
};

export default Movie;
