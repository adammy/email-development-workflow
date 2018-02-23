import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tree = ({ files = [] }) => {
	return (
		<div>
			<h1>Files</h1>
			{files.map(file => {
				return file[Object.keys(file)].map(file => {
					return (
						<h2>{file.name}</h2>
					);
				});
			})}
		</div>
	);
};

Tree.propTypes = {
	files: PropTypes.arrayOf(PropTypes.object)
};

export default Tree;
