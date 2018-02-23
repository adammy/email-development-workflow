import React, { Component } from 'react';
import Tree from './components/Tree';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [
			  {
			    "transactional": [
			      {
			        "name": "receipt.html",
			        "dir": "emails\/build\/transactional",
			        "created": "2018-02-23T16:40:47.618Z",
			        "modified": "2018-02-23T16:40:47.618Z",
			        "size": 0,
			        "subject": "Undefined",
			        "preview": "Undefined"
			      },
			      {
			        "name": "receipt.txt",
			        "dir": "emails\/build\/transactional",
			        "created": "2018-02-23T16:40:53.501Z",
			        "modified": "2018-02-23T16:40:53.501Z",
			        "size": 0
			      }
			    ]
			  }
			]
		};
	}

	render() {
		return (
			<div className="app">
				<Tree files={this.state.files} />
			</div>
		);
	}

}

export default App;
