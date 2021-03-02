import React from 'react';
import { useState } from 'react';

const StatePractice = () => {
	const [name, setname] = useState({
		county: 'Bangladesh',
		age: 21,
	});
	/*const Change = () => {
		setname({ county: 'America' });
	}; */
	return (
		<div>
			<h1>{name.county}</h1>

			<button onClick={() => setname({ county: 'England' })}>Change</button>
		</div>
	);
};

export default StatePractice;
