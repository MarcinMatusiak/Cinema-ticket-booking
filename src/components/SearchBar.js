import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: ''};
	};

	onInputChange(event){
		console.log(event.targer.value);
	};

 	onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label> Movie Search </label>
						<input 
							type="text"
							placeholder="Enter movie title"
							value={this.state.text}
							onChange={(e) => this.setState({ text: e.target.value})}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
