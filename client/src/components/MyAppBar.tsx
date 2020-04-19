import React, {memo} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box/Box';
import AppBar from '@material-ui/core/AppBar/AppBar';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import {vars} from '../services/vars';

interface MyAppBarProps {}

export const MyAppBar = memo(({}: MyAppBarProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		myAppBar: {
			display: 'flex',
			alignItems: 'center',
			height: `${vars.appBarHeightRems}rem`,
			padding: '0.5rem',
			lineHeight: '2rem',
			backgroundImage: `linear-gradient(to right, ${pink[500]}, ${purple[500]})`,
			color: '#fff',
		},
		title: {
			fontSize: '2rem',
			userSelect: 'none',
		},
		myAppBarSmall: {
			'& $title': {
				fontSize: '1.5rem',
			},
		},
	}));
	const classes = useStyles();

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<AppBar position="static" className={classes.myAppBar + (isSmallScreen ? ' ' + classes.myAppBarSmall : '')}>
			<Box className={classes.title}>Pixel Glissando</Box>
		</AppBar>
	);
});
