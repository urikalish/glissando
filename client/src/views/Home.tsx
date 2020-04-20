import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

// interface HomeProps {}

export const Home = memo((/*{}: HomeProps*/) => {
	const useStyles = makeStyles(theme => ({
		home: {
			height: '100%',
		},
		content: {
			marginTop: '1rem',
		},
		title: {
			color: theme.palette.text.primary,
		},
		counter: {
			marginTop: 16,
			color: theme.palette.text.primary,
		},
		actionButton: {
			marginTop: 8,
			marginRight: 8,
		},
	}));
	const classes = useStyles();

	const history = useHistory();
	const navigateTo = (e: React.MouseEvent<HTMLElement>) => {
		if (e.currentTarget.dataset.nav) {
			history.push(e.currentTarget.dataset.nav || '/');
		}
	};

	return (
		<Box className={classes.home}>
			<Box>
				<Typography variant="h4" className={classes.title}>
					Home
				</Typography>
			</Box>
			<Divider light />
			<Box className={classes.content}>
				<Button data-nav={'/create'} onClick={navigateTo} variant="contained" className={classes.actionButton}>
					Create
				</Button>
				<Button data-nav={'/run'} onClick={navigateTo} variant="contained" className={classes.actionButton}>
					Run
				</Button>
				<Button data-nav={'/join'} onClick={navigateTo} variant="contained" className={classes.actionButton}>
					join
				</Button>
			</Box>
		</Box>
	);
});
