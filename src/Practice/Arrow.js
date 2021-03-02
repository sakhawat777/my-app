import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Btn = (a) => {
	alert(a);
};
const Arrow = () => {
	return (
		<button
			onClick={Btn.bind(this, 'Arrow Function')}
			classmidnightName='btn bg- m4'>
			Arrow Button
		</button>
	);
};
export default Arrow;
