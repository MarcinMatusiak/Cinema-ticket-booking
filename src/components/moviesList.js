import React from 'react';

const MoviesList = (props) => {
	const movies = props.movies.map((movie) => {
		return <img key={movie.id} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />;
	});

	return <div> {movies} </div>;
};

export default MoviesList;
