import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Folder extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
	}

	getFiles(dir) {
		fetch(`api/tree?path=${dir}`)
			.then(response => response.json())
			.then(json => {
				json.map(obj => {
					obj.active = false;
					obj.collapsed = true;
					return obj;
				});
				this.setState({
					files: json
				});
			});
	}

	renderFolder(files) {
		return files.map(file => {
			if (file.isDir) {
				return (
					<li key={file.fullPath} className={file.collapsed ? 'collapsed' : ''}>
						<button className={file.collapsed ? 'file file-folder' : 'file file-folder file-folder-open'}>{file.name}</button>
						<Folder dir={file.fullPath} />
					</li>
				);
			} else {
				return <li key={file.fullPath}><button className={`file file-${file.ext}`}>{file.name}</button></li>;
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
