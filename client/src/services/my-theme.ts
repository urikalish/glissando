import {createMuiTheme} from '@material-ui/core';

export const getMyTheme = () => {
	return createMuiTheme({
		palette: {
			type: 'light',
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
