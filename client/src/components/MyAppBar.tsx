import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar/AppBar';

interface MyAppBarProps {}

export const MyAppBar = memo(({}: MyAppBarProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		rootStyle: {
			display: 'flex',
			alignItems: 'center',
			height: '4rem',
			padding: '1rem',
			fontSize: '2rem',
			lineHeight: '2rem',
			backgroundColor: '#c05',
			color: '#fff',
		},
	}));
	const {rootStyle} = useStyles();

	return (
		<AppBar position="static" className={rootStyle}>
			Pixel Glissando
		</AppBar>
	);
});
