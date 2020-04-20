import React, {useState} from 'react';
import {BackendSocketContainer} from './hooks/useBackendSocket';
import {ThemeProvider} from '@material-ui/core/styles';
import {MyThemeOptions, defaultThemeOptions, createMyTheme} from './services/theme-helper';
import {Main} from './views/Main';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
	const [themeOptions, setThemeOptions] = useState(defaultThemeOptions);
	const [theme, setTheme] = useState(createMyTheme(themeOptions));

	const onChangeTheme = (themeOptions: MyThemeOptions) => {
		setThemeOptions(themeOptions);
		setTheme(createMyTheme(themeOptions));
	};

	return (
		<ThemeProvider theme={theme}>
			<BackendSocketContainer.Provider>
				<Router>
					<Main themeOptions={themeOptions} onThemeChange={onChangeTheme} />
				</Router>
			</BackendSocketContainer.Provider>
		</ThemeProvider>
	);
}

export default App;
