import React from 'react';
import Movie from "./Movie";

const Section = ({movies}) => {
        return (
            <div className={"flex flex-wrap m-8 justify-around "}>
                {movies && movies.filter(movie => movie.image && movie.title && movie.titleType).map(movie => <Movie movie={movie}/>)}
            </div>
        );
    }
;

export default Section;
