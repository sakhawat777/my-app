import React from 'react';
import { useState } from 'react';

const ConOperator = () => {
	const [name, setname] = useState({
		county: 'Bangladesh',
		age: 21,
	});
	/*const Change = () => {
		setname({ county: 'America' });
	}; */
	return (
		<>
			{name.age === 21 ? (
				<div>
					<h1>True</h1>
				</div>
			) : (
				<div> False</div>
			)}
		</>
	);
};

export default ConOperator;
