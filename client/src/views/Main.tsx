import React, {memo} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container/Container';
import Box from '@material-ui/core/Box/Box';
import {MyAppBar, myAppVarHeight} from '../components/MyAppBar';
import {MyThemeToggle} from '../components/MyThemeToggle';
import {Home} from './Home';
import {Create} from './Create';
import {Run} from './Run';
import {Join} from './Join';
import {MyThemeOptions} from '../services/theme-helper';

interface MainProps {
	themeOptions: MyThemeOptions;
	onThemeChange: (themeOptions: MyThemeOptions) => void;
}

export const Main = memo(({themeOptions, onThemeChange}: MainProps) => {
	const useStyles = makeStyles(theme => ({
		main: {
			position: 'relative',
			height: '100%',
			padding: 0,
		},
		content: {
			height: `calc(100% - ${myAppVarHeight})`,
			overflow: 'auto',
			backgroundColor: theme.palette.background.default,
			padding: '1rem 1.5rem',
		},
	}));
	const classes = useStyles();

	const onChangeTheme = (themeOptions: MyThemeOptions) => {
		if (onThemeChange) {
			onThemeChange(themeOptions);
		}
	};

	return (
		<Router>
			<Container maxWidth="lg" className={classes.main}>
				<MyAppBar />
				<MyThemeToggle themeOptions={themeOptions} onThemeChange={onChangeTheme} />
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
