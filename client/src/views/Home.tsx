import React, {memo, useEffect, useMemo, useState} from 'react';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import {useBackend} from '../hooks/useBackend';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import {MyLinks} from '../components/MyLinks';
import Container from '@material-ui/core/Container/Container';

interface HomeProps {}

export const Home = memo(({}: HomeProps) => {
	const useStyles = makeStyles(theme => ({
		containerStyle: {
			height: '100%',
			width: '100%',
			backgroundColor: theme.palette.background.default,
		},
		button1Style: {
			backgroundColor: 'red',
		},
		button2Style: {
			backgroundColor: 'green',
		},
	}));
	const {containerStyle, button1Style, button2Style} = useStyles();

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
		<Container className={containerStyle}>
			<div>
				<Typography variant="h4">Home</Typography>
			</div>
			<hr />
			<div>{counter}</div>
			<Button
				onClick={goInc}
				variant="contained"
				color="primary"
				className={counter % 2 === 0 ? button1Style : button2Style}
			>
				<PlusOne />
			</Button>
			<MyLinks links={links} horizontal />
		</Container>
	);
});
