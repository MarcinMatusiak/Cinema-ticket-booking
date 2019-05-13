import React from 'react';

const MoviesList = (props) => {
	
	const movies = props.movies.map((movie) => {
	    const url = 'https://image.tmdb.org/t/p/w300/';
		return <img key={movie.id} src={`${url}${movie.poster_path}`} alt={movie.title} />;
	});

	return <div> {movies} </div>;
};

export default MoviesList;
