import React, { Component } from 'react';
import reactDom from 'react-dom';

export default class AnotherDemo extends Component {
	ChangeImg() {
		var contrainer = document.getElementById('img10');
		reactDom.findDOMNode(contrainer).src = 'img2.jpg';
	}

	render() {
		return (
			<div>
				<button onClick={this.ChangeImg}>Change Image</button> <br></br>
				<img id='img10' src='img1.jpg'></img>
			</div>
		);
	}
}
