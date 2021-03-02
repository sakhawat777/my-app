import React from 'react';

function Hello(props) {
	function Btn(a) {
		alert(a);
	}
	return (
		<h1>
			<button onClick={Btn.bind(this, 'I am from para')}>Click Me</button>
			Name: {props.name} And Age: {props.age}
		</h1>
	);
}
export default Hello;
