import React, { Component } from 'react';

export default class Text extends Component {
	constructor() {
		super();
		this.state = {
			desc: ' Hi! How are you?',
			inputText: ' ',
		};
	}
	onChangeHandler = (event) => {
		var myText = event.target.value;
		this.setState({ inputText: myText });
	};
	render() {
		return (
			<div>
				<textarea
					onChange={this.onChangeHandler}
					placeholder='Write your text'
				/>
				<p>{this.state.inputText}</p>
			</div>
		);
	}
}
