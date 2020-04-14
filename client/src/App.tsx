import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Home} from './views/Home';
import {Create} from './views/Create';
import {Join} from './views/Join';
import {Run} from './views/Run';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
	app: {
		height: '100%',
		textAlign: 'center',
	},
}));

function App() {
	const theme = createMuiTheme({
		palette: {
			type: 'light',
		},
	});
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className={classes.app}>
					<h1>Pixel Glissando</h1>
					<hr />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" exact component={Home} />
						<Route path="/create" exact component={Create} />
						<Route path="/join" exact component={Join} />
						<Route path="/run" exact component={Run} />
						<Route component={Home} />
					</Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
