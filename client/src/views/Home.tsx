import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import {useBackend} from '../hooks/useBackend';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Paper from '@material-ui/core/Paper/Paper';
//import styled from '@material-ui/core/styles/styled';

export function Home() {
	const useStyles = makeStyles(theme => ({
		rootStyle: {
			backgroundColor: theme.palette.background.default,
		},
		button1Style: {
			backgroundColor: 'red',
		},
		button2Style: {
			backgroundColor: 'green',
		},
		listStyle: {},
		linkStyle: {
			textDecoration: 'none',
			color: theme.palette.text.secondary,
			'&:hover': {
				color: theme.palette.text.primary,
			},
		},
	}));
	const {
		rootStyle,
		button1Style,
		button2Style,
		listStyle,
		linkStyle,
	} = useStyles();

	const [counter, setCounter] = useState<number>(0);
	const {backendCounter, incBackendCounter} = useBackend();

	// const MyButton = styled(Button)({
	// 	background: counter % 2 === 0 ? 'red' : 'blue',
	// 	border: 0,
	// 	borderRadius: 3,
	// 	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	// 	color: 'white',
	// 	height: 48,
	// 	padding: '0 30px',
	// });

	const goInc = async () => {
		incBackendCounter(counter);
	};

	useEffect(() => {
		setCounter(backendCounter);
	}, [backendCounter]);

	return (
		<div className={rootStyle}>
			<Paper elevation={0}>
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
				<List className={listStyle}>
					<ListItem>
						<Link to="/create" className={linkStyle}>
							Create
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/run" className={linkStyle}>
							Run
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/join" className={linkStyle}>
							Join
						</Link>
					</ListItem>
				</List>
			</Paper>
		</div>
	);
}
