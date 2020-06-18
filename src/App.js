import React, {Suspense} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Ripple} from 'react-spinners-css';
import WindowSize from '@reach/window-size';
import Loading from './components/fullPageLoader';
import MobileApp from './routes/MobileRoutes/mobile.routes';
import TabDesktopApp from './routes/TDRoutes/tab-desktop.routes';

const App = () => {
	return (
		<Suspense
			fallback={
				<Loading>
					<Ripple color="#242835" />
				</Loading>
			}>
			<div className="App">
				<WindowSize>
					{({width}) =>
						width < 760 ? <MobileApp /> : <TabDesktopApp />
					}
				</WindowSize>
			</div>
		</Suspense>
	);
};

export const colors = ['#242835', '#4B81E7', 'rgb(29%, 51%, 91%)', '#EB3F3F'];
export const font = ['Comfortaa', 'Josefin Sans', 'Montserrat'];
export default App;
