import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Folder from './Folder';
import './style.css';

class Tree extends Component {

	render() {
		return (
			<div className="tree">
				<Folder dir="emails/build" />
			</div>
		);
	}

}

export default Tree;
