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
			'/movie/popular?api_key=90c5cb06ac52c1395de20502caaa6a51&language=en-US&page=2&region=pl',
			// to mozna zmienic za pomoca INTERCEPTORS
			{}
		);

		this.setState({ movies: response.data.results });
	}

	onSubmitSearch = async (text) => {
		const response = await themoviedb.get(
			'/search/movie?api_key=90c5cb06ac52c1395de20502caaa6a51', {
				params: {query: text}}
		);

		this.setState({ movies: response.data.results });
	}

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
