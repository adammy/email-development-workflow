import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Folder extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
		this.collapseFolder = this.collapseFolder.bind(this);
		this.openFile = this.openFile.bind(this);
	}

	getFiles(dir) {
		fetch(`api/tree?path=${dir}`)
			.then(response => response.json())
			.then(json => {
				json.map(obj => {
					if (obj.isDir) obj.collapsed = true;
					if (obj.ext === 'html') obj.active = false;
					return obj;
				});
				this.setState({
					files: json
				});
			});
	}

	collapseFolder(path, collapsed) {
		let files = Object.assign({}, this.state).files;
		files.map(file => {
			if (file.fullPath === path) {
				file.collapsed = !collapsed;
			}
			return file;
		});
		this.setState({ files });
	}

	openFile(path) {
		console.log(path);
	}

	renderFolder(files) {
		return files.map(file => {
			if (file.isDir) {
				return (
					<li key={file.fullPath} className={file.collapsed ? 'collapsed' : ''}>
						<button
							className={file.collapsed ? 'file file-folder' : 'file file-folder file-folder-open'}
							onClick={() => this.collapseFolder(file.fullPath, file.collapsed)}>
								{file.name}
						</button>
						<Folder dir={file.fullPath} />
					</li>
				);
			} else {
				return (
					<li key={file.fullPath}>
						<button
							className={`file file-${file.ext}`}
							onClick={() => this.openFile(file.fullPath)}>
								{file.name}
						</button>
					</li>
				);
			}
		});
	}

	componentDidMount() {
		this.getFiles(this.props.dir);
	}

	render() {
		const { files } = this.state;
		return (
			<ul>
				{files && this.renderFolder(files)}
			</ul>
		);
	}

}

export default Folder;
