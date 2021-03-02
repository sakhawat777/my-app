import React, { Component } from 'react';

export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			fname: ' ',
			lname: ' ',
			email: ' ',
			mobile: ' ',
		};
	}
	onChangeHandler = (event) => {
		var inputName = event.target.name;
		var inputValue = event.target.value;
		this.setState({ [inputName]: inputValue });
		if (inputName === 'fname') {
			var namePattern = /^[a-zA-Z ]{2,30}$/;
			if (!namePattern.test(inputValue)) {
				this.setState({ fname: 'First Name is invaild' });
                
			}
		}
		if (inputName === 'lname') {
			var namePattern = /^[a-zA-Z ]{2,30}$/;
			if (!namePattern.test(inputValue)) {
				this.setState({ lname: 'Last Name is invaild' });
			}
		}
		if (inputName === 'email') {
			var namePattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			if (!namePattern.test(inputValue)) {
				this.setState({ email: 'Email Address is invaild' });
			}
		}
		if (inputName === 'mobile') {
			if (!Number(inputValue)) {
				this.setState({ mobile: 'Mobile Number is invaild' });
			}
		}
	};

	render() {
		return (
			<div>
				<p>{this.state.fname}</p>
				<p>{this.state.lname}</p>
				<p>{this.state.email}</p>
				<p>{this.state.mobile}</p>
				<form>
					<input
						onChange={this.onChangeHandler}
						name='fname'
						type='text'
						placeholder='First Name'></input>{' '}
					<br></br>
					<input
						onChange={this.onChangeHandler}
						name='lname'
						type='text'
						placeholder='Last Name'></input>{' '}
					<br></br>
					<input
						onChange={this.onChangeHandler}
						name='email'
						type='text'
						placeholder='Email'></input>{' '}
					<br></br>
					<input
						onChange={this.onChangeHandler}
						name='mobile'
						type='text'
						placeholder='Mobile'></input>{' '}
					<br></br>
					<input name='submit' type='submit' value='Save Now'></input>
				</form>
			</div>
		);
	}
}
