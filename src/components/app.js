import React from 'react';
import themoviedb from '../api/themoviedb';
import SearchBar from './SearchBar';
import MoviesList from './moviesList';

class App extends React.Component {
	state = { movies: [] };

	async componentDidMount() {
		const response = await themoviedb.get(
			'/movie/popular?api_key=90c5cb06ac52c1395de20502caaa6a51&language=en-US&page=3&region=pl',
			// to mozna zmienic za pomoca INTERCEPTORS
			{}
		);

		this.setState({ movies: response.data.results });
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar />
				<MoviesList movies={this.state.movies} />
			</div>
		);
	}
}

export default App;
