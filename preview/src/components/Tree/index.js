import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tree = ({ files = [], onFolderClick = (f => f), onFileClick = (f => f) }) => {

	function renderFile(file) {

		if (file.isDir) {
			return (
				<li key={file.fullPath} className={file.collapsed ? 'collapsed' : ''}>
					<button
						className={file.collapsed ? 'file file-folder' : 'file file-folder file-folder-open'}
						onClick={() => onFolderClick(file.fullPath, file.collapsed)}>
							{file.name}
					</button>
					{file.files.length > 0 && <Tree files={file.files} onFolderClick={onFolderClick} onFileClick={onFileClick} />}
				</li>
			);
		}

		return (
			<li key={file.fullPath}>
				<button
					className={file.active ? `file file-active file-${file.ext}` : `file file-${file.ext}`}
					onClick={() => onFileClick(file)}>
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
