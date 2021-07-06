import React from 'react';

const Movie = ({movie}) => {
    const types = {
        "movie": "Movie",
        "tvSeries": "TV Series"
    }
    return (
        <div
            className={"justify-between transform hover:scale-110 motion-reduce:transform-none w-1/5 m-8 shadow-lg rounded-lg bg-gray-200"}>
            {/*    Recieves the api info and loads picture info etc*/}
            <img className={"object-contain rounded-t-lg"} src={movie.image.url} alt=""/>
            <p className={"m-2 font-bold"}>{movie.title}</p>
            <div className={"m-2"}>
                {/*Title*/}
                {/*Type*/}
                <p className={"m-2"}>{types[movie.titleType]}</p>
                {/*Years*/}
                <p className={"m-2"}>{movie.year}</p>
                {/*Duration*/}
                {movie.runningTimeInMinutes &&
                <p className={"m-2"}>{movie.runningTimeInMinutes} minutes</p> ||
                <p>No duration defined</p>}
            </div>
        </div>
    );
};

export default Movie;
