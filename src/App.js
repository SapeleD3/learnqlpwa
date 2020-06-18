/* eslint-disable react/jsx-fragments */
import React, {Suspense} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {Ripple} from 'react-spinners-css';
import WindowSize from '@reach/window-size';
import {GlobalStyles} from './components/globalStyles';
import {lightTheme, darkTheme} from './components/Theme';
import {useDarkMode} from './hooks/useDarkMode';
import Loading from './components/fullPageLoader';
import MobileApp from './routes/MobileRoutes/mobile.routes';
import TabDesktopApp from './routes/TDRoutes/tab-desktop.routes';
import Toggle from './components/modeToggle';

const App = () => {
	const [theme, themeToggler, mountedComponent] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	if (!mountedComponent) return <div />;
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<Suspense
					fallback={
						<Loading>
							<Ripple color="#242835" />
						</Loading>
					}>
					<div className="App">
						<Toggle toggleTheme={themeToggler} theme={theme} />
						<WindowSize>
							{({width}) =>
								width < 760 ? (
									<MobileApp theme={theme} />
								) : (
									<TabDesktopApp theme={theme} />
								)
							}
						</WindowSize>
					</div>
				</Suspense>
			</>
		</ThemeProvider>
	);
};
export const colors = ['#242835', '#4B81E7', 'rgb(29%, 51%, 91%)', '#EB3F3F'];
export const font = ['Comfortaa', 'Josefin Sans', 'Montserrat'];
export default App;
