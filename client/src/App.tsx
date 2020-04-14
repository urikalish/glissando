import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Main} from './views/Main';

function App() {
	const theme = createMuiTheme({
		palette: {
			type: 'light',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
