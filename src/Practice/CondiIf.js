import React, { useState } from 'react';

export const CondiIf = () => {
	const [state, setstate] = useState(false);
	if (state === true) {
		return (
			<div>
				<button>Log In Button</button>;
			</div>
		);
	} else {
		return (
			<div>
				<button>Log Out Button</button>;
			</div>
		);
	}
};
