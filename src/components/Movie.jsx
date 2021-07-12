import React, {useState} from 'react';
import {fetchMoviePlot} from "../requests";

const Movie = ({movie}) => {
    const types = {
        "movie": "Movie",
        "tvSeries": "TV Series"
    }

    const [toggle, setToggle] = useState(false);
    const [moviePlot, setMoviePlot] = useState("");
    const getMoviePlot = async (id) => {
        let promise = await fetchMoviePlot(id).then(r => r);
        let text = promise.plots[0].text
        setMoviePlot(text);
    }

    return (
        <div
            className={"w-1/6 flex flex-col justify-between transform hover:scale-110 motion-reduce:transform-none m-8 shadow-lg rounded-lg bg-gray-200"}>
            {/*    Recieves the api info and loads picture info etc*/}
            <img className={"object-contain rounded-t-lg max-h-96"} src={movie.image.url} alt=""/>
            <p className={"mx-2 mt-2 font-bold"}>{movie.title}</p>
            {/*Send the request for the details and open a new window?*/}
            <div className={"mx-2"}>
                <p className={"m-2"}>{types[movie.titleType]}</p>
                <p className={"m-2"}>{movie.year}</p>
                {movie.runningTimeInMinutes &&
                <p className={"m-2"}>{movie.runningTimeInMinutes} minutes</p> ||
                <p>No duration defined</p>}
                {toggle && moviePlot && <p className={"text-left m-2"}>{moviePlot}</p>}
            </div>
            <button className={"bg-yellow-400 w-full h-10 rounded-b-lg w-full focus:ring-2 focus:ring-red-500 focus-inset"}
                    onClick={() => {
                        setToggle(!toggle)
                        getMoviePlot(movie.id.split("/")[2]);
                    }}>Details
            </button>
        </div>
    );
};

export default Movie;
