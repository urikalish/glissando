import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {Main} from './views/Main';
import {getMyTheme} from './services/my-theme';

function App() {
	const [isLightTheme /*, setIsLightTheme*/] = useState(true);
	const [theme, setTheme] = useState(getMyTheme(isLightTheme));

	useEffect(() => {
		setTheme(getMyTheme(isLightTheme));
	}, [isLightTheme]);

	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
