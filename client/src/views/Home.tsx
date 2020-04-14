import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import {useBackend} from '../hooks/useBackend';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
	root: {},
	list: {},
	link: {
		textDecoration: 'none',
		color: '#ccc',
		'&:hover': {
			color: '#fff',
		},
	},
}));

export function Home() {
	const classes = useStyles();

	const [counter, setCounter] = useState<number>(0);
	const {backendCounter, incBackendCounter} = useBackend();

	const goInc = async () => {
		incBackendCounter(counter);
	};

	useEffect(() => {
		setCounter(backendCounter);
	}, [backendCounter]);

	return (
		<div className={classes.root}>
			<div>Home</div>
			<hr />
			<div>{counter}</div>
			<Button onClick={goInc} variant="contained" color="primary">
				<PlusOne />
			</Button>
			<List className={classes.list}>
				<ListItem>
					<Link to="/create" className={classes.link}>
						Create
					</Link>
				</ListItem>
				<ListItem>
					<Link to="/run" className={classes.link}>
						Run
					</Link>
				</ListItem>
				<ListItem>
					<Link to="/join" className={classes.link}>
						Join
					</Link>
				</ListItem>
			</List>
		</div>
	);
}
