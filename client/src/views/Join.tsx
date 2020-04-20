import React, {memo, useMemo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider/Divider';
import {NavLinks} from '../components/NavLinks';

// interface JoinProps {}

export const Join = memo((/*{}: JoinProps*/) => {
	const useStyles = makeStyles(theme => ({
		join: {
			height: '100%',
		},
		content: {
			marginTop: '1rem',
		},
		title: {
			color: theme.palette.text.primary,
		},
	}));
	const classes = useStyles();

	const links = useMemo(() => {
		return [
			{
				text: 'Home',
				to: '/',
			},
		];
	}, []);

	return (
		<Box className={classes.join}>
			<Box>
				<Typography variant="h4" className={classes.title}>
					Join
				</Typography>
			</Box>
			<Divider light />
			<Box className={classes.content}>
				<NavLinks links={links} horizontal />
			</Box>
		</Box>
	);
});
