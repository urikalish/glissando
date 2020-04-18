import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {useMyTheme} from './hooks/useMyTheme';
import {Main} from './views/Main';

function App() {
	const {theme} = useMyTheme({isLightTheme: false});

	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
