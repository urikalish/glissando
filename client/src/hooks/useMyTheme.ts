import {useMemo, useState} from 'react';
import {createMuiTheme} from '@material-ui/core';

export interface useMyThemeProps {}

export const useMyTheme = ({}: useMyThemeProps) => {

	const [isLight/*, setIsLight*/] = useState(false);

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

	return {theme};
};
