import {createMuiTheme} from '@material-ui/core';

export interface MyThemeOptions {
	isDarkMode: boolean;
}

export const createMyTheme = (myThemeOptions: MyThemeOptions) => {
	return createMuiTheme({
		palette: {
			type: myThemeOptions.isDarkMode ? 'dark' : 'light',
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
