import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar/AppBar';

export function MyAppBar() {
	const useStyles = makeStyles((/*theme*/) => ({
		rootStyle: {
			display: 'flex',
			alignItems: 'center',
			height: '5rem',
			padding: '1rem',
			lineHeight: '3rem',
			fontSize: '3rem',
			backgroundColor: '#d05',
			backgroundImage: 'linear-gradient(to right, #d03, #d07)',
			color: '#fff',
		},
	}));
	const {rootStyle} = useStyles();

	return (
		<AppBar position="static" className={rootStyle}>
			Pixel Glissando
		</AppBar>
	);
}
