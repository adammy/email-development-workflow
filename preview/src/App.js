import React, { Component } from 'react';
import Tree from './components/Tree';
import Preview from './components/Preview';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [],
			email: false
		};
	}

	componentWillMount() {
		this.getFiles('emails/build');
	}

	getFiles(dir) {
		fetch(`api/tree?path=${dir}`)
			.then(res => res.json())
			.then(files => {
				files.map(file => {
					if (file.isDir) file.collapsed = true;
					if (file.ext === 'html') file.active = true;
					return file;
				});
				this.setState({ files });
			})
	}

	renderFiles(files) {
		files.map(file => {
			if (file.isDir) {
					return (
						<li key={file.fullPath} className={file.collapsed ? 'collapsed' : ''}>
							<button className={file.collapsed ? 'file file-folder' : 'file file-folder file-folder-open'}>
								{file.name}
							</button>
						</li>
					);
				} else {
					return (
						<li key={file.fullPath}>
							<button className={`file file-${file.ext}`}>
								{file.name}
							</button>
						</li>
					);
				}
		});
	}

	render() {
		return (
			<div className="app">
				<Tree files={this.state.files} />
				<Preview email={this.state.email} />
			</div>
		);
	}

}

export default App;
