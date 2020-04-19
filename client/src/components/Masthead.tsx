import React, {memo} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box/Box';
import AppBar from '@material-ui/core/AppBar/AppBar';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import {myVars} from '../services/my-vars';

interface MastheadProps {}

export const Masthead = memo(({}: MastheadProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		masthead: {
			display: 'flex',
			alignItems: 'center',
			height: `${myVars.appBarHeightRems}rem`,
			padding: '0.5rem',
			lineHeight: '2rem',
			backgroundImage: `linear-gradient(to right, ${pink[500]}, ${purple[500]})`,
			color: '#fff',
		},
		title: {
			fontSize: '2rem',
			userSelect: 'none',
		},
		mastheadSmall: {
			'& $title': {
				fontSize: '1.5rem',
			},
		},
	}));
	const classes = useStyles();

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<AppBar position="static" className={classes.masthead + (isSmallScreen ? ' ' + classes.mastheadSmall : '')}>
			<Box className={classes.title}>Pixel Glissando</Box>
		</AppBar>
	);
});
