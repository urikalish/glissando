import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {Main} from './views/Main';
import {getMyTheme} from './services/my-theme';

function App() {
	return (
		<ThemeProvider theme={getMyTheme()}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
