import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = ({movies}) => {
    return (
        <div className="movies">
            {movies.map((movie) => <MovieCard movie={movie} key={movie.id} /> )}
        </div>
    )
}

export default MoviesList
