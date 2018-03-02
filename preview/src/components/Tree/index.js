import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tree = ({ files = [], onFolderClick = (f => f) }) => {

	function renderFile(file) {

		if (file.isDir) {
			return (
				<li key={file.fullPath} className={file.collapsed ? 'collapsed' : ''}>
					<button
						className={file.collapsed ? 'file file-folder' : 'file file-folder file-folder-open'}
						onClick={() => onFolderClick(file.fullPath, file.collapsed)}>
							{file.name}
					</button>
					{file.files.length > 0 && <Tree files={file.files} onFolderClick={onFolderClick} />}
				</li>
			);
		}

		return (
			<li key={file.fullPath}>
				<button className={`file file-${file.ext}`}>
					{file.name}
				</button>
			</li>
		);

	}

	return (
		<ul>
			{files.map(file => renderFile(file))}
		</ul>
	);

};

Tree.propTypes = {
	files: PropTypes.arrayOf(PropTypes.object)
};

export default Tree;
