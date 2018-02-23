import React, { Component } from 'react';
import Tree from './components/Tree';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [
			  {
			    "name": "random-in-root.html",
			    "dir": "emails\/build",
			    "created": "2018-02-23T21:13:06.000Z",
			    "modified": "2018-02-23T21:13:06.000Z",
			    "size": 0,
			    "subject": "Undefined",
			    "preview": "Undefined"
			  },
			  {
			    "name": "random-in-root.txt",
			    "dir": "emails\/build",
			    "created": "2018-02-23T21:13:12.897Z",
			    "modified": "2018-02-23T21:13:12.897Z",
			    "size": 0
			  },
			  {
			    "sales": [
			      {
			        "name": "package.html",
			        "dir": "emails\/build\/sales",
			        "created": "2018-02-23T21:13:22.302Z",
			        "modified": "2018-02-23T21:13:22.302Z",
			        "size": 0,
			        "subject": "Undefined",
			        "preview": "Undefined"
			      }
			    ]
			  },
			  {
			    "transactional": [
			      {
			        "auto-response": [
			          {
			            "name": "res-week.html",
			            "dir": "emails\/build\/transactional\/auto-response",
			            "created": "2018-02-23T21:12:53.557Z",
			            "modified": "2018-02-23T21:12:53.557Z",
			            "size": 0,
			            "subject": "Undefined",
			            "preview": "Undefined"
			          },
			          {
			            "name": "res.html",
			            "dir": "emails\/build\/transactional\/auto-response",
			            "created": "2018-02-23T21:12:41.373Z",
			            "modified": "2018-02-23T21:12:41.373Z",
			            "size": 0,
			            "subject": "Undefined",
			            "preview": "Undefined"
			          }
			        ]
			      },
			      {
			        "receipt": [
			          {
			            "name": "receipt.html",
			            "dir": "emails\/build\/transactional\/receipt",
			            "created": "2018-02-23T16:40:47.618Z",
			            "modified": "2018-02-23T16:40:47.618Z",
			            "size": 0,
			            "subject": "Undefined",
			            "preview": "Undefined"
			          },
			          {
			            "name": "receipt.txt",
			            "dir": "emails\/build\/transactional\/receipt",
			            "created": "2018-02-23T16:40:53.501Z",
			            "modified": "2018-02-23T16:40:53.501Z",
			            "size": 0
			          }
			        ]
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
				<div className="preview">
				</div>
			</div>
		);
	}

}

export default App;
