import React from 'react';
import themoviedb from '../api/themoviedb';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { movies: [] };
	}

	async componentDidMount() {
		const response = await themoviedb.get(
			'https://api.themoviedb.org/3/movie/now_playing?api_key=90c5cb06ac52c1395de20502caaa6a51&language=en-US&page=1',
			// to mozna zmienic za pomoca INTERCEPTORS
			{}
		);

		this.setState({ movies: response.data.results });
		console.log(this.state.movies)
		if (this.state.movies[1].title.includes('Shazam'))
		console.log("Tak");
	};

	onSubmitSearch = async (text) => {
		// const response = await themoviedb.get(
		// 	'/search/movie?api_key=90c5cb06ac52c1395de20502caaa6a51', {
		// 		params: {query: text}}
		// );

		const response = await this.state.movies.map((movie) => {
		if(movie.title.includes(text))
		{
		    const url = 'https://image.tmdb.org/t/p/w300/';
			return <img key={movie.id} src={`${url}${movie.poster_path}`} alt={movie.title} />;
		}});
		
		console.log(text)
		this.setState({ movies: response});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSubmitSearch}/>
				<MoviesList movies={this.state.movies} />
			</div>
		);
	}
}

export default App;
