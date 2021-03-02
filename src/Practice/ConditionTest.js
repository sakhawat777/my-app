import React, { Component } from 'react';

class ConditionTest extends Component {
	constructor() {
		super();
		this.state = {
			login: true,
		};
	}

	render() {
		if (this.state.login == true) {
			return <button>Log In Button</button>;
		} else {
			return <button>Log Out Button</button>;
		}
	}
}
export default ConditionTest;
