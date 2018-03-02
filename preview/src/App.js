import React, { Component } from 'react';
import Tree from './components/Tree';
import Preview from './components/Preview';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [],
			activeFile: {}
		};
		this.collapseFolder = this.collapseFolder.bind(this);
		this.setActiveFile = this.setActiveFile.bind(this);
	}

	componentWillMount() {
		this.getFiles('emails/build');
	}

	setCollapsed(files, isCollapsed = false, path = null) {
		return files.map(file => {
			if (file.isDir) {

				// if path is provided, only apply func to folder with matching path
				if (path && file.fullPath == path) {
					file.collapsed = !isCollapsed;
				}

				// if no path is provided, apply func to every folder
				if (!path) {
					file.collapsed = !isCollapsed;
				}

				// if folder has additional files, recursively run func on those files too
				if (file.files.length > 0) {
					file.files = this.setCollapsed(file.files, isCollapsed, path);
				}

			}
			return file;
		});
	}

	getFiles(path) {
		fetch(`api/tree?path=${path}`)
			.then(res => res.json())
			.then(files => {
				files = this.setCollapsed(files);
				this.setState({ files });
			});
	}

	collapseFolder(path, isCollapsed) {
		let files = Object.assign({}, this.state).files;
		files = this.setCollapsed(files, isCollapsed, path);
		this.setState({ files });
	}

	setActiveFile(activeFile) {
		this.setState({ activeFile });
	}

	render() {
		return (
			<div className="app">
				<div className="tree">
					<Tree
						files={this.state.files}
						onFolderClick={this.collapseFolder}
						onFileClick={this.setActiveFile} />
				</div>
				<Preview file={this.state.activeFile} />
			</div>
		);
	}

}

export default App;
