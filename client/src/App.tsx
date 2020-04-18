import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {Main} from './views/Main';
import {createMyTheme, MyThemeOptions} from './services/theme-helper';

function App() {
	const [themeOptions, setThemeOptions] = useState({isDarkMode: false});
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
