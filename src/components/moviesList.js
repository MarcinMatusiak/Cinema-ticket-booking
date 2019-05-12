import React from 'react';
import './moviesList.css';

const MoviesList = (props) => {
	const movies = props.movies.map((movie) => {
		const url = 'https://image.tmdb.org/t/p/w780/';
		return (
			// <div className="movie">
			<div className="movie" key={movie.id} >
				<img src={`${url}${movie.poster_path}`} alt={movie.title} />
				<div className="movie-details">
					<h2>{movie.title}</h2>
					<p>{movie.overview}</p>
					<div className="ui large star rating" data-rating="3" ></div>
				</div>
			</div>
		);
	});

	return <div className="movies-list"> {movies} </div>;
};

export default MoviesList;
