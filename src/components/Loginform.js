import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

const Loginform = () => {
	return (
		<div>
			<TextInput label='Name'/>
			<TextInput label='Password' />
			<Button type='submit' />
		</div>
	);
};

export default Loginform;