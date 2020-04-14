import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Main} from './views/Main';

const theme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
