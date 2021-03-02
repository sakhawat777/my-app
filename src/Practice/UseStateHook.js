import React from 'react';
import { useState } from 'react';

const UseStateHook = () => {
	const [name, setname] = useState({
		county: 'England',
		age: 21,
	});

	return (
		<div>
			<h1>{name.county}</h1>

			<button onClick={() => setname({ county: 'Bangladesh' })}>
				Change
			</button>
		</div>
	);
};

export default UseStateHook;
