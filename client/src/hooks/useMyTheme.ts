import {useMemo} from 'react';
import {createMuiTheme} from '@material-ui/core';

export interface useMyThemeProps {
	isLightTheme: boolean;
}

export const useMyTheme = ({isLightTheme}: useMyThemeProps) => {
	const theme = useMemo(() => {
		return createMuiTheme({
			palette: {
				type: isLightTheme ? 'light' : 'dark',
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
	}, [isLightTheme]);

	return {theme};
};
