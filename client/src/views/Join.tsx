import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem/ListItem';
import List from '@material-ui/core/List/List';

interface JoinProps {}

export const Join = memo(({}: JoinProps) => {
	return (
		<>
			<div>Join</div>
			<hr />
			<List>
				<ListItem>
					<Link to="/">Home</Link>
				</ListItem>
			</List>
		</>
	);
});
