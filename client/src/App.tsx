import React, {useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {useMyTheme} from './hooks/useMyTheme';
import {Main} from './views/Main';
import {MyThemeToggle} from './components/MyThemeToggle';

function App() {
	const {theme, toggleTheme} = useMyTheme({isLightTheme: true});

	useEffect(() => {
		setTimeout(() => {
			toggleTheme();
		}, 3000);
	}, []);

	const onToggleChange = () => {
		toggleTheme();
	};

	return (
		<ThemeProvider theme={theme}>
			<Main />
			<MyThemeToggle onToggleChange={onToggleChange} />
		</ThemeProvider>
	);
}

export default App;
