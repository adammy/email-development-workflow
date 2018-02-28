import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Preview = ({ email }) => {

	return (
		<div className="preview">
			{!email && <p>No active email</p>}
		</div>
	);

};

Preview.propTypes = {
	subject: PropTypes.string,
	preview: PropTypes.string,
	path: PropTypes.string
};

export default Preview;
