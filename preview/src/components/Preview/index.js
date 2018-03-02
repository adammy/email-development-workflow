import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Preview = ({ file = {} }) => {

	return (
		<div className="preview">
			{!file.name && <p>No active email</p>}
			{file.name &&
				<iframe src={`http:\/\/localhost:3001/${file.fullPath}`} width="100%" height="100%" />
			}
		</div>
	);

};

Preview.propTypes = {
	file: PropTypes.object
};

export default Preview;
