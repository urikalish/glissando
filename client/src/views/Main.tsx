import React, {memo} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container/Container';
import Box from '@material-ui/core/Box/Box';
import {myVars} from '../services/my-vars';
import {MyThemeOptions} from '../services/theme-helper';
import {Masthead} from '../components/Masthead';
import {ThemeToggle} from '../components/ThemeToggle';
import {Home} from './Home';
import {Create} from './Create';
import {Run} from './Run';
import {Join} from './Join';

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
			height: `calc(100% - ${myVars.mastheadHeightRems}rem)`,
			overflow: 'auto',
			backgroundColor: theme.palette.background.default,
			padding: '1rem 1.5rem',
		},
	}));
	const classes = useStyles();

	const handleThemeChange = (themeOptions: MyThemeOptions) => {
		if (onThemeChange) {
			onThemeChange(themeOptions);
		}
	};

	return (
		<Router>
			<Container maxWidth="xl" className={classes.main}>
				<Masthead />
				<ThemeToggle themeOptions={themeOptions} onThemeChange={handleThemeChange} />
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
