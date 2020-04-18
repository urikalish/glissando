import React, {memo} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {MyAppBar, myAppVarHeight} from '../components/MyAppBar';
import {Home} from './Home';
import {Create} from './Create';
import {Run} from './Run';
import {Join} from './Join';
import Container from '@material-ui/core/Container/Container';
import Box from '@material-ui/core/Box/Box';

interface MainProps {}

export const Main = memo(({}: MainProps) => {
	const useStyles = makeStyles(theme => ({
		main: {
			height: '100%',
			padding: 0,
		},
		content: {
			height: `calc(100% - ${myAppVarHeight})`,
			overflow: 'auto',
			backgroundColor: theme.palette.background.default,
		},
	}));
	const classes = useStyles();

	return (
		<Router>
			<Container maxWidth="lg" className={classes.main}>
				<MyAppBar />
				<Box className={classes.content}>
					<Switch>
						<Route path="/create" exact component={Create} />
						<Route path="/join" exact component={Join} />
						<Route path="/run" exact component={Run} />
						<Route component={Home} />
					</Switch>
				</Box>
			</Container>
		</Router>
	);
});
