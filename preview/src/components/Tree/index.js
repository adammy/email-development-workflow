import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tree = ({ files = [] }) => {

	function showFile(file) {
		if (file.subject) { // html file
			return <li className="file file-email">{file.name}</li>;
		} else if (file.name) { // file (not html)
			return <li className="file file-misc">{file.name}</li>;
		} else { // folder
			const name = Object.keys(file)[0];
			return <li className="file file-folder">{name}</li>;
		}
	}

	return (
		<div className="tree">
			<ul>
				{files && files.map(file =>
					<li key={file.fullPath} className={file.isDir ? 'file file-folder' : file.isEmail ? 'file file-email' : 'file file-misc'}>{file.name}</li>
				)}
			</ul>
		</div>
	);

};

Tree.propTypes = {
	files: PropTypes.arrayOf(PropTypes.object)
};

export default Tree;
