import React, {memo, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import {useBackend} from '../hooks/useBackend';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Paper from '@material-ui/core/Paper/Paper';
import {MyLinks} from '../components/MyLinks';

interface HomeProps {}

export const Home = memo(({}: HomeProps) => {
	const useStyles = makeStyles(theme => ({
		rootStyle: {
			height: '100%',
			backgroundColor: theme.palette.background.default,
		},
		wrapperStyle: {
			height: '100%',
		},
		button1Style: {
			backgroundColor: 'red',
		},
		button2Style: {
			backgroundColor: 'green',
		},
	}));
	const {rootStyle, wrapperStyle, button1Style, button2Style} = useStyles();

	const [counter, setCounter] = useState<number>(0);
	const {backendCounter, incBackendCounter} = useBackend();

	const goInc = async () => {
		incBackendCounter(counter);
	};

	useEffect(() => {
		setCounter(backendCounter);
	}, [backendCounter]);

	return (
		<div className={rootStyle}>
			<Paper elevation={0} className={wrapperStyle}>
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
				<MyLinks create run join />
			</Paper>
		</div>
	);
});
