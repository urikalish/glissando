import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem/ListItem';
import List from '@material-ui/core/List/List';

export function Create() {
	return (
		<>
			<div>Create</div>
			<hr />
			<List>
				<ListItem>
					<Link to="/">Home</Link>
				</ListItem>
			</List>
		</>
	);
}
