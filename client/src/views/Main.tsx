import React, {memo} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {MyAppBar} from '../components/MyAppBar';
import {Home} from './Home';
import {Create} from './Create';
import {Run} from './Run';
import {Join} from './Join';

interface MainProps {}

export const Main = memo(({}: MainProps) => {
	const useStyles = makeStyles(theme => ({
		rootStyle: {
			height: '100%',
			backgroundColor: theme.palette.background.default,
			textAlign: 'center',
		},
	}));
	const {rootStyle} = useStyles();

	return (
		<Router>
			<div className={rootStyle}>
				<MyAppBar />
				<Switch>
					<Route path="/create" exact component={Create} />
					<Route path="/join" exact component={Join} />
					<Route path="/run" exact component={Run} />
					<Route component={Home} />
				</Switch>
			</div>
		</Router>
	);
});
