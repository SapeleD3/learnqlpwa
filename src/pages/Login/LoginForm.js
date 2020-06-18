import React from 'react';
import Inputs from '../../components/Inputs';

export default function LoginForm() {
	return (
		<div>
			<Inputs placeholder="Email" />
			<Inputs placeholder="Password" />
		</div>
	);
}
