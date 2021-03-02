import React, { Component } from 'react';
import reactDom from 'react-dom';

export default class DemoRender extends Component {
	myFun() {
		var contrainer = document.getElementById('myID');
		var element = <h2>Hi I am Changed!</h2>;
		var calback = function () {
			alert('Hi I am from Alert');
		};
		reactDom.render(element, contrainer, calback);
	}

	render() {
		return (
			<div>
				<button onClick={this.myFun}>Change</button>
				<h1 id='myID'>Hi I am Sakhawat</h1>
			</div>
		);
	}
}
