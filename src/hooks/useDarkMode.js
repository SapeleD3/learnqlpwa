import {useEffect, useState} from 'react';

export const useDarkMode = () => {
	const [theme, setTheme] = useState('light');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		return theme === 'light' ? setMode('dark') : setMode('light');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		setMountedComponent(true);
		return localTheme && setTheme(localTheme);
	}, []);
	return [theme, themeToggler, mountedComponent];
};
