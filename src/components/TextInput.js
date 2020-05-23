import React from 'react';

const TextInput = ({ label }) => {
	return (
		<div>
			{label}
			<input type='text' />
		</div>
	);
};

export default TextInput;