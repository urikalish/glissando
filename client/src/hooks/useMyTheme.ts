import {useMemo, useState} from 'react';
import {createMuiTheme} from '@material-ui/core';

export interface useMyThemeProps {
	isLightTheme: boolean;
}

export const useMyTheme = ({isLightTheme}: useMyThemeProps) => {
	const [isLight, setIsLight] = useState(isLightTheme);

	const theme = useMemo(() => {
		return createMuiTheme({
			palette: {
				type: isLight ? 'light' : 'dark',
			},
			typography: {
				fontFamily: [
					'Play',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
				].join(','),
			},
		});
	}, [isLight]);

	const toggleTheme = () => {
		setIsLight(!isLight);
	};

	return {theme, toggleTheme};
};
