import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Home} from './Home';
import {Create} from './Create';
import {Run} from './Run';
import {Join} from './Join';
import AppBar from '@material-ui/core/AppBar/AppBar';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		backgroundColor: theme.palette.background.default,
		textAlign: 'center',
	},
	appBar: {
		display: 'flex',
		alignItems: 'center',
		height: '5rem',
		padding: '1rem',
		lineHeight: '3rem',
		fontSize: '3rem',
		backgroundColor: '#d05',
	},
}));

export function Main() {
	const classes = useStyles();

	return (
		<Router>
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBar}>
					Pixel Glissando
				</AppBar>
				<Switch>
					<Route path="/create" exact component={Create} />
					<Route path="/join" exact component={Join} />
					<Route path="/run" exact component={Run} />
					<Route component={Home} />
				</Switch>
			</div>
		</Router>
	);
}
