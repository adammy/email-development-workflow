import React, { Component } from 'react';
import Tree from './components/Tree';
import Preview from './components/Preview';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [],
			loadingFiles: true
		};
	}

	componentDidMount() {
		fetch('api/tree')
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
					files: json,
					loadingFiles: false
				});
			});
	}

	render() {
		return (
			<div className="app">
				<Tree files={this.state.files} loading={this.state.loadingFiles} />
				<Preview />
			</div>
		);
	}

}

export default App;
