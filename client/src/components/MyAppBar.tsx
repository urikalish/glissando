import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box/Box';
import AppBar from '@material-ui/core/AppBar/AppBar';
import pink from '@material-ui/core/colors/pink';

interface MyAppBarProps {}

export const myAppVarHeight = '4rem';

export const MyAppBar = memo(({}: MyAppBarProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		myAppBar: {
			display: 'flex',
			alignItems: 'center',
			height: myAppVarHeight,
			padding: '1rem',
			lineHeight: '2rem',
			backgroundColor: pink[500],
			color: '#fff',
		},
		title: {
			fontSize: '2rem',
			userSelect: 'none',
		},
	}));
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.myAppBar}>
			<Box className={classes.title}>Pixel Glissando</Box>
		</AppBar>
	);
});
