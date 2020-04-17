import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ListItem from '@material-ui/core/ListItem/ListItem';
import List from '@material-ui/core/List/List';
import {Link} from 'react-router-dom';

interface MyLinksProps {
	create?: boolean;
	run?: boolean;
	join?: boolean;
}

export const MyLinks = memo(({create, run, join}: MyLinksProps) => {
	const useStyles = makeStyles(theme => ({
		listStyle: {},
		linkStyle: {
			textDecoration: 'none',
			color: theme.palette.text.secondary,
			'&:hover': {
				color: theme.palette.text.primary,
			},
		},
	}));
	const {listStyle, linkStyle} = useStyles();

	return (
		<List className={listStyle}>
			{create && (
				<ListItem>
					<Link to="/create" className={linkStyle}>
						Create
					</Link>
				</ListItem>
			)}
			{run && (
				<ListItem>
					<Link to="/run" className={linkStyle}>
						Run
					</Link>
				</ListItem>
			)}
			{join && (
				<ListItem>
					<Link to="/join" className={linkStyle}>
						Join
					</Link>
				</ListItem>
			)}
		</List>
	);
});
