import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tree = ({ files = [], loading = true }) => {

	function showFile(file) {
		if (file.subject) { // html file
			return (
				<button className="file file-email">
					{file.name}
				</button>
			);
		} else if (file.name) { // file (not html)
			return (
				<button className="file file-misc">
					{file.name}
				</button>
			);
		} else { // folder
			const name = Object.keys(file)[0];
			return (
				<button className="file file-folder">
					{name}
				</button>
			);
		}
	}

	return (
		<div className="tree">
			{!loading && files.map(file => showFile(file))}
		</div>
	);

};

Tree.propTypes = {
	files: PropTypes.arrayOf(PropTypes.object)
};

export default Tree;
