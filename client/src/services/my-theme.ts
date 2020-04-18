import {createMuiTheme} from '@material-ui/core';

export const getMyTheme = (isLightTheme: boolean) => {
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
};
