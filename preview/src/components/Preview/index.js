import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Preview = ({ subject, preview, path = 'default/index.html' }) => {

	return (
		<div className="preview">
			<iframe src={path} width="100%" height="100%" />
		</div>
	);

};

Preview.propTypes = {
	subject: PropTypes.string,
	preview: PropTypes.string,
	path: PropTypes.string
};

export default Preview;
