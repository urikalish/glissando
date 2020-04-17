import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {Main} from './views/Main';
import {getColorTheme} from './services/color-service';

function App() {
	return (
		<ThemeProvider theme={getColorTheme()}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
