import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ListItem from '@material-ui/core/ListItem/ListItem';
import List from '@material-ui/core/List/List';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container/Container';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';

interface MyLinksProps {
	links: Array<{text: string; to: string}>;
	horizontal?: boolean;
}

export const MyLinks = memo(({links, horizontal}: MyLinksProps) => {
	const useStyles = makeStyles(theme => ({
		listStyle: {},
		listStyleHorizontal: {
			display: 'flex',
			justifyContent: 'flex-start',
		},
		linkStyle: {
			textDecoration: 'none',
			color: theme.palette.text.secondary,
			'&:hover': {
				color: theme.palette.text.primary,
			},
		},
	}));
	const {listStyle, listStyleHorizontal, linkStyle} = useStyles();

	return (
		<Container>
			<List className={listStyle + (horizontal ? ' ' + listStyleHorizontal : '')}>
				{links.map(link => (
					<ListItem>
						<Link to={link.to} className={linkStyle}>
							<ListItemText primary={link.text} />
						</Link>
					</ListItem>
				))}
			</List>
		</Container>
	);
});
