import React, { Component } from 'react';
import Tree from './components/Tree';
import Preview from './components/Preview';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="app">
				<Tree />
				<Preview email={false} />
			</div>
		);
	}

}

export default App;
