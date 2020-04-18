import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {MyThemeOptions, defaultThemeOptions, createMyTheme} from './services/theme-helper';
import {Main} from './views/Main';

function App() {
	const [themeOptions, setThemeOptions] = useState(defaultThemeOptions);
	const [theme, setTheme] = useState(createMyTheme(themeOptions));

	const onChangeTheme = (themeOptions: MyThemeOptions) => {
		setThemeOptions(themeOptions);
		setTheme(createMyTheme(themeOptions));
	};

	return (
		<ThemeProvider theme={theme}>
			<Main themeOptions={themeOptions} onThemeChange={onChangeTheme} />
		</ThemeProvider>
	);
}

export default App;
