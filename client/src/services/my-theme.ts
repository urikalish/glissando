import {createMuiTheme} from '@material-ui/core';

export const getMyTheme = () => {
	const defaultFontFamily = 'Play, Roboto, Helvetica, Arial, sans-serif';
	return createMuiTheme({
		palette: {
			type: 'light',
		},
		typography: {
			body1: {
				fontFamily: defaultFontFamily,
			},
			body2: {
				fontFamily: defaultFontFamily,
			},
		},
	});
};
