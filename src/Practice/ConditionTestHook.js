import { render } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';

const ConditionTestHook = () => {
	const [name, setname] = useState(true);

	return (
		<div>
			{name === true ? (
				<button>Log In</button>
			) : (
				<div>
					<button>Log out</button>
				</div>
			)}
		</div>
	);
};

export default ConditionTestHook;
