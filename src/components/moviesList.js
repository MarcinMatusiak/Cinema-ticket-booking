import React from 'react';
import ModalOnScreen from './ModalOnScreen';

const MoviesList = (props) => {
	const movies = props.movies.map((movie) => {
		const url = 'https://image.tmdb.org/t/p/w780/';
		return (
			<div className="movie" key={movie.id} >
				<img src={`${url}${movie.poster_path}`} alt={movie.title} />
				<div className="movie-details">
					<h2>{movie.title}</h2>
					<p>{movie.overview}</p>
					<div><ModalOnScreen></ModalOnScreen></div>
				</div>
			</div>
		);
	});

	return <div className="movies-list"> {movies} </div>;
};

export default MoviesList;
