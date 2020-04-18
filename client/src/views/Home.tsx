import React, {memo, useEffect, useMemo, useState} from 'react';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import {useBackend} from '../hooks/useBackend';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import {MyLinks} from '../components/MyLinks';
import Box from '@material-ui/core/Box/Box';

interface HomeProps {}

export const Home = memo(({}: HomeProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		home: {
			height: '100%',
			padding: '16px 24px',
		},
	}));
	const classes = useStyles();

	const [counter, setCounter] = useState<number>(0);
	const {backendCounter, incBackendCounter} = useBackend();

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
			<div>
				<Typography variant="h4">Home</Typography>
			</div>
			<hr />
			<div>{counter}</div>
			<Button onClick={goInc} variant="contained">
				<PlusOne />
			</Button>
			<MyLinks links={links} horizontal />
		</Box>
	);
});
