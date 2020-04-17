import {createMuiTheme} from '@material-ui/core';

export const getColorTheme = () => {
	return createMuiTheme({
		palette: {
			type: 'light',
		},
	});
};
