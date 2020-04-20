import React, {memo, useMemo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider/Divider';
import Button from '@material-ui/core/Button';
import {BackendSocketContainer} from '../hooks/useBackendSocket';
import {NavLinks} from '../components/NavLinks';

// interface CreateProps {}

export const Create = memo((/*{}: CreateProps*/) => {
	const useStyles = makeStyles(theme => ({
		create: {
			height: '100%',
		},
		content: {
			marginTop: '1rem',
		},
		title: {
			color: theme.palette.text.primary,
		},
		actionButton: {
			marginTop: 8,
			marginRight: 8,
		},
	}));
	const classes = useStyles();

	const links = useMemo(() => {
		return [
			{
				text: 'Home',
				to: '/',
			},
			{
				text: 'Run',
				to: '/run',
			},
		];
	}, []);

	const {createShow} = BackendSocketContainer.useContainer();
	const goCreate = () => {
		createShow();
	};

	return (
		<Box className={classes.create}>
			<Box>
				<Typography variant="h4" className={classes.title}>
					Create
				</Typography>
			</Box>
			<Divider light />
			<Box className={classes.content}>
				<NavLinks links={links} horizontal />
			</Box>
			<Box className={classes.content}>
				<Button onClick={goCreate} variant="contained" className={classes.actionButton}>
					Create
				</Button>
			</Box>
		</Box>
	);
});
