import React, {memo, useEffect, useMemo, useState} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import {useMyBackend} from '../hooks/useMyBackend';
import {MyLinks} from '../components/MyLinks';

interface HomeProps {}

export const Home = memo(({}: HomeProps) => {
	const useStyles = makeStyles(theme => ({
		home: {
			height: '100%',
		},
		content: {
			marginTop: '1rem',
		},
		title: {
			color: theme.palette.text.primary,
		},
		counter: {
			marginTop: 16,
			color: theme.palette.text.primary,
		},
		incButton: {
			marginTop: 8,
		},
	}));
	const classes = useStyles();

	const [counter, setCounter] = useState<number>(0);
	const {backendCounter, incBackendCounter} = useMyBackend();

	const goInc = async () => {
		incBackendCounter(counter);
	};

	useEffect(() => {
		setCounter(backendCounter);
	}, [backendCounter]);

	const links = useMemo(() => {
		return [
			{
				text: 'Create',
				to: '/create',
			},
			{
				text: 'Run',
				to: '/run',
			},
			{
				text: 'Join',
				to: '/join',
			},
		];
	}, []);

	return (
		<Box className={classes.home}>
			<Box>
				<Typography variant="h4" className={classes.title}>
					Home
				</Typography>
			</Box>
			<Divider light />
			<Box className={classes.content}>
				<MyLinks links={links} horizontal />
				<Box className={classes.counter}>{counter}</Box>
				<Button onClick={goInc} variant="contained" className={classes.incButton}>
					<PlusOne />
				</Button>
			</Box>
		</Box>
	);
});
