import React from 'react';
import {func, string} from 'prop-types';
import {Switch} from 'antd';

const Toggle = ({toggleTheme, theme}) => {
	const val = () => {
		if (theme === 'dark') return true;
		return false;
	};
	return (
		<Switch
			style={{float: 'right'}}
			onClick={toggleTheme}
			checked={val()}
		/>
	);
};
Toggle.propTypes = {
	toggleTheme: func.isRequired,
	theme: string.isRequired,
};
export default Toggle;
