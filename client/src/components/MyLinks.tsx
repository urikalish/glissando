import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box/Box';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import {Link} from 'react-router-dom';

interface MyLinksProps {
	links: Array<{text: string; to: string}>;
	horizontal?: boolean;
}

export const MyLinks = memo(({links, horizontal}: MyLinksProps) => {
	const useStyles = makeStyles(theme => ({
		myLinks: {},
		list: {},
		listHorizontal: {
			display: 'flex',
			justifyContent: 'flex-start',
			'& $listItem': {
				flex: '0 0 auto',
				width: 'auto',
				height: '1.5rem',
				borderLeft: `1px solid ${theme.palette.divider}`,
				'&:nth-of-type(1)': {
					paddingLeft: 0,
					borderLeft: 'none',
				},
			},
		},
		listItem: {},
		link: {
			textDecoration: 'none',
			color: theme.palette.text.secondary,
			'&:hover': {
				color: theme.palette.text.primary,
			},
		},
	}));
	const classes = useStyles();

	return (
		<Box maxWidth="sm" className={classes.myLinks}>
			<List className={classes.list + (horizontal ? ' ' + classes.listHorizontal : '')}>
				{links.map((link, index) => (
					<ListItem key={index} className={classes.listItem}>
						<Link to={link.to} className={classes.link}>
							<ListItemText primary={link.text} />
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);
});
